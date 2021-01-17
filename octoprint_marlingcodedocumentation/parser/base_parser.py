import contextlib
import tempfile


__all__ = ['BaseDocumentationParser']


class BaseDocumentationParser(object):
    # An id to be used internally
    ID = NotImplemented

    # The user-friendly source
    SOURCE = NotImplemented

    def load_and_parse_all_codes(self, directory):
        """
        Return a dictionary of code => doc_items

        The doc_item should have these attributes:
            * title: a short name for the command
            * brief: a description for what the command does
            * parameters: a list of parameters description

        A parameter should have these attributes:
            * tag: the name of the parameter (eg 'X', 'Y', etc), that will be
            used when matching a user command
            * label: a label about it's value to be displayed to the user (eg
            '[X<pos>]')
        """
        raise NotImplementedError()

    @contextlib.contextmanager
    def latest_documentation_directory(self, directory):
        """
        Create a temporary directory, and ask the parser to populate it, if one
        is not provided.
        """
        if directory is not None:
            yield directory
            return

        with tempfile.TemporaryDirectory() as directory:
            alternate_directory = self.populate_temporary_directory(directory)
            if alternate_directory is not None:
                yield alternate_directory
            else:
                yield directory

    def populate_temporary_directory(self, directory):
        """
        Populate a temporary directory with the necessary documentation source.
        """
        raise NotImplementedError()
