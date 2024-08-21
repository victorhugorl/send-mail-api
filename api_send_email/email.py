from ninja import Schema

class Email(Schema):
    subject: str
    msg_html: str
    mailto: list[str]
