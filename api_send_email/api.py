from ninja import NinjaAPI
from .email_utils import send_html_email
from .email import Email



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
