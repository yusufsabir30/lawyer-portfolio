from flask import Blueprint, request, jsonify
from flask_mail import Message
from app import mail

main = Blueprint("main", __name__)

@main.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@main.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json()

    ad = data.get("ad", "")
    soyad = data.get("soyad", "")
    email = data.get("email", "")
    konu = data.get("konu", "")
    mesaj = data.get("mesaj", "")

    if not all([ad, soyad, email, konu, mesaj]):
        return jsonify({"error": "Tüm alanlar zorunludur."}), 400

    try:
        msg = Message(
            subject=f"[Portfolyo] {konu} - {ad} {soyad}",
            recipients=["talipdurgn@gmail.com"],
            body=f"""
Ad Soyad: {ad} {soyad}
E-posta: {email}
Konu: {konu}

Mesaj:
{mesaj}
            """
        )
        mail.send(msg)
        return jsonify({"success": True}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500