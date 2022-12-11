from .base import BaseModel


class ResponseModel(BaseModel):
    def __init__(self, code, message, data) -> None:
        self.code = code if code is not None else -1
        self.message = message if message is not None else ''
        self.data = data

    def toJson(self) -> dict:
        return {"code": self.code, "message": self.message, "data": self.data}
