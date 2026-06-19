from flask import Flask
from flask_mail import Mail
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

mail = Mail()

def create_app():
    app = Flask(__name__)
    
    CORS(app)

    # Mail config
    app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER")
    app.config["MAIL_PORT"] = int(os.getenv("MAIL_PORT", 587))
    app.config["MAIL_USE_TLS"] = True
    app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
    app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")

    mail.init_app(app)

    from app.routes import main
    app.register_blueprint(main)

    return app