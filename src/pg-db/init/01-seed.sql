-- Runs automatically on first container startup (fresh volume only)

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product TEXT NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

INSERT INTO users (name, email) VALUES
    ('Alice Johnson', 'alice@example.com'),
    ('Bob Smith', 'bob@example.com'),
    ('Carol Diaz', 'carol@example.com'),
    ('David Lee', 'david@example.com'),
    ('Eve Turner', 'eve@example.com')
ON CONFLICT (email) DO NOTHING;

INSERT INTO orders (user_id, product, amount) VALUES
    (1, 'Widget A', 19.99),
    (1, 'Widget B', 5.49),
    (2, 'Gadget X', 99.00),
    (3, 'Gizmo Pro', 149.99),
    (4, 'Widget A', 19.99),
    (5, 'Gadget X', 99.00);