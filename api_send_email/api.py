from ninja import NinjaAPI, Schema
from .email_utils import send_html_email



class Email(Schema):
    subject: str
    msg_html: str
    mailto: str

api = NinjaAPI()

@api.get("hello")
def hello(request):
    return "hello world"

@api.post("/mail")
def send_mail(request, email: Email):
    dict = email.dict()

    send_html_email(dict)
    
     # Você pode acessar os dados como um dicionário
    return {"message": "sucesso"}
