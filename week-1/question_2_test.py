import pytest
from question_2 import maxAndMin

def test_maxAndMin():
    assert maxAndMin([300, 0, 30]) == (300, 0)

def test_str():
    with pytest.raises(ValueError):
        maxAndMin("35b", 45)