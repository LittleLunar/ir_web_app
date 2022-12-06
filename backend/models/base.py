from abc import ABC, abstractmethod


class BaseModel(ABC):
    @abstractmethod
    def toJson(self) -> dict:
        pass
