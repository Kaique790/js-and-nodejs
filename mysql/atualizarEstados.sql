UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

select * FROM estados WHERE sigla = 'MA'

UPDATE estados 
SET nome ='Paraná', populacao = 11.32
WHERE sigla = 'PR'

SELECT sigla, nome FROM estados WHERE sigla = 'pr'