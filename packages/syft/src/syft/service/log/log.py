# relative
from ...serde.serializable import serializable
from ...types.syft_object import SYFT_OBJECT_VERSION_3
from ...types.syft_object import SyftObject


@serializable()
class SyftLog(SyftObject):
    __canonical_name__ = "SyftLog"
    __version__ = SYFT_OBJECT_VERSION_3

    __repr_attrs__ = ["stdout", "stderr"]
    __exclude_sync_diff_attrs__: list[str] = []

    stdout: str = ""
    stderr: str = ""

    def append(self, new_str: str) -> None:
        self.stdout += new_str

    def append_error(self, new_str: str) -> None:
        self.stderr += new_str

    def restart(self) -> None:
        self.stderr = ""
        self.stdout = ""
