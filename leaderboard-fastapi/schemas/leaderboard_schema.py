def record_serializer(record) -> dict:
    return {
        "id" : str(record["_id"]),
        "username": record["username"],
        "correct_answers": record["correct_answers"],
        "date": record["date"]
    }

def records_serializer(records) -> list:
    return [record_serializer(record) for record in records]
