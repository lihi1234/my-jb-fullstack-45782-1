from flask import Flask, g
import sqlite3

app = Flask(__name__)
DATABASE = 'simple.db'

# ------------------- DB helper -------------------
def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row  # dict-like access
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db:
        db.close()

# ------------------- Routes -------------------
@app.route('/')
def index():
    db = get_db()
    # Create table if not exists
    db.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )
    ''')
    # Insert a sample user
    db.execute('INSERT INTO users (name) VALUES (?)', ("Alice",))
    db.commit()
    
    # Fetch all users
    cursor = db.execute('SELECT * FROM users')
    users = cursor.fetchall()
    
    # Display in plain HTML
    html = "<h1>Users</h1><ul>"
    for user in users:
        html += f"<li>{user['id']}: {user['name']}</li>"
    html += "</ul>"
    return html

# ------------------- Run -------------------
if __name__ == '__main__':
    app.run(debug=True)
