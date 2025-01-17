# This file was generated by liblab | https://liblab.com/

from .utils.json_map import JsonMap
from .utils.base_model import BaseModel


@JsonMap({"type_": "type"})
class ApiResponse(BaseModel):
    """ApiResponse

    :param code: code, defaults to None
    :type code: int, optional
    :param type_: type_, defaults to None
    :type type_: str, optional
    :param message: message, defaults to None
    :type message: str, optional
    """

    def __init__(self, code: int = None, type_: str = None, message: str = None):
        """ApiResponse

        :param code: code, defaults to None
        :type code: int, optional
        :param type_: type_, defaults to None
        :type type_: str, optional
        :param message: message, defaults to None
        :type message: str, optional
        """
        if code is not None:
            self.code = code
        if type_ is not None:
            self.type_ = type_
        if message is not None:
            self.message = message
