from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

# Configure MySQL connection
db_config = {
    'user': 'root',
    'password': '',
    'host': 'localhost',
    'database': 'products',
    'raise_on_warnings': True
}

# Create a connection pool (optional but recommended for production)
def get_db_connection():
    return mysql.connector.connect(**db_config)

@app.route('/', methods=['GET'])
def get_users():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, name, price FROM dairy")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(users)


if __name__ == "__main__":
    app.run(debug=True)
