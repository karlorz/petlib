# This file was generated by liblab | https://liblab.com/

from enum import Enum
from .utils.json_map import JsonMap
from .utils.base_model import BaseModel


class OrderStatus(Enum):
    """An enumeration representing different categories.

    :cvar PLACED: "placed"
    :vartype PLACED: str
    :cvar APPROVED: "approved"
    :vartype APPROVED: str
    :cvar DELIVERED: "delivered"
    :vartype DELIVERED: str
    """

    PLACED = "placed"
    APPROVED = "approved"
    DELIVERED = "delivered"

    def list():
        """Lists all category values.

        :return: A list of all category values.
        :rtype: list
        """
        return list(map(lambda x: x.value, OrderStatus._member_map_.values()))


@JsonMap({"id_": "id", "pet_id": "petId", "ship_date": "shipDate"})
class Order(BaseModel):
    """Order

    :param id_: id_, defaults to None
    :type id_: int, optional
    :param pet_id: pet_id, defaults to None
    :type pet_id: int, optional
    :param quantity: quantity, defaults to None
    :type quantity: int, optional
    :param ship_date: ship_date, defaults to None
    :type ship_date: str, optional
    :param status: Order Status, defaults to None
    :type status: OrderStatus, optional
    :param complete: complete, defaults to None
    :type complete: bool, optional
    """

    def __init__(
        self,
        id_: int = None,
        pet_id: int = None,
        quantity: int = None,
        ship_date: str = None,
        status: OrderStatus = None,
        complete: bool = None,
    ):
        """Order

        :param id_: id_, defaults to None
        :type id_: int, optional
        :param pet_id: pet_id, defaults to None
        :type pet_id: int, optional
        :param quantity: quantity, defaults to None
        :type quantity: int, optional
        :param ship_date: ship_date, defaults to None
        :type ship_date: str, optional
        :param status: Order Status, defaults to None
        :type status: OrderStatus, optional
        :param complete: complete, defaults to None
        :type complete: bool, optional
        """
        if id_ is not None:
            self.id_ = id_
        if pet_id is not None:
            self.pet_id = pet_id
        if quantity is not None:
            self.quantity = quantity
        if ship_date is not None:
            self.ship_date = ship_date
        if status is not None:
            self.status = self._enum_matching(status, OrderStatus.list(), "status")
        if complete is not None:
            self.complete = complete
