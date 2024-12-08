# This file was generated by liblab | https://liblab.com/

from .utils.json_map import JsonMap
from .utils.base_model import BaseModel


@JsonMap({"id_": "id"})
class Tag(BaseModel):
    """Tag

    :param id_: id_, defaults to None
    :type id_: int, optional
    :param name: name, defaults to None
    :type name: str, optional
    """

    def __init__(self, id_: int = None, name: str = None):
        """Tag

        :param id_: id_, defaults to None
        :type id_: int, optional
        :param name: name, defaults to None
        :type name: str, optional
        """
        if id_ is not None:
            self.id_ = id_
        if name is not None:
            self.name = name
