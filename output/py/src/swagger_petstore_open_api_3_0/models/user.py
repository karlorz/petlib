# This file was generated by liblab | https://liblab.com/

from .utils.json_map import JsonMap
from .utils.base_model import BaseModel


@JsonMap(
    {
        "id_": "id",
        "first_name": "firstName",
        "last_name": "lastName",
        "user_status": "userStatus",
    }
)
class User(BaseModel):
    """User

    :param id_: id_, defaults to None
    :type id_: int, optional
    :param username: username, defaults to None
    :type username: str, optional
    :param first_name: first_name, defaults to None
    :type first_name: str, optional
    :param last_name: last_name, defaults to None
    :type last_name: str, optional
    :param email: email, defaults to None
    :type email: str, optional
    :param password: password, defaults to None
    :type password: str, optional
    :param phone: phone, defaults to None
    :type phone: str, optional
    :param user_status: User Status, defaults to None
    :type user_status: int, optional
    """

    def __init__(
        self,
        id_: int = None,
        username: str = None,
        first_name: str = None,
        last_name: str = None,
        email: str = None,
        password: str = None,
        phone: str = None,
        user_status: int = None,
    ):
        """User

        :param id_: id_, defaults to None
        :type id_: int, optional
        :param username: username, defaults to None
        :type username: str, optional
        :param first_name: first_name, defaults to None
        :type first_name: str, optional
        :param last_name: last_name, defaults to None
        :type last_name: str, optional
        :param email: email, defaults to None
        :type email: str, optional
        :param password: password, defaults to None
        :type password: str, optional
        :param phone: phone, defaults to None
        :type phone: str, optional
        :param user_status: User Status, defaults to None
        :type user_status: int, optional
        """
        if id_ is not None:
            self.id_ = id_
        if username is not None:
            self.username = username
        if first_name is not None:
            self.first_name = first_name
        if last_name is not None:
            self.last_name = last_name
        if email is not None:
            self.email = email
        if password is not None:
            self.password = password
        if phone is not None:
            self.phone = phone
        if user_status is not None:
            self.user_status = user_status