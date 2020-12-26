-- Tampilkan seluruh data dari table user beserta Contentnya 
SELECT * FROM post_tb
JOIN users_tb
ON post_tb.id_user = users_tb.id;


-- Insert seluruh data dengan table yang terkait
INSERT INTO users_tb (name, photo, email, password)
VALUES ('Iwan Tafui', 'iwan.jpg', 'iwan@test.com', 'secret');

INSERT INTO post_tb (content, image, id_user)
VALUES ('Wadoh lupa beli camilan', 'test-image5.jpg', 1);


-- Tampilkan seluruh data content berdasarkan user tertentu
SELECT * FROM post_tb WHERE id_user=1;


-- Ubah salah satu data user
UPDATE users_tb SET 
name='Alfredo Bangun', photo='aldo.jpg',email="aldo@localhost.com", password="rahasia"
WHERE id=1;