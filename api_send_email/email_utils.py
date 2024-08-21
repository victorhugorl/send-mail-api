from django.core.mail import EmailMessage
from decouple import config

def send_html_email(dict):
    subject = dict['subject']
    html_content = dict['msg_html']
    from_email = str(config('EMAIL_HOST_USER'))
    to = dict['mailto']

    email = EmailMessage(subject, html_content, from_email, [*to])
    email.content_subtype = 'html'  # Define o conteúdo como HTML
    email.send()
