# Consulta-de-placas-de-veiculos

Pela falta de api públicas de informações sobre dados dos veículos, no projeto são gerados de forma aleatória as placas e suas possíveis localizações (a escolha da cidade é feita a partir da primeira letra da placa).
Exemplos: 

A = 'Paraná-PR';
B = 'São Paulo-SP';
D = 'Maranhão-MA'; 
I = 'Bahia-BA';
O = 'Rio de Janeiro-RJ';
Z = 'Amapá-AP';

Número máximo de possibilidades: 176 milhões
seguindo a regra de três letras e quatro números.

São criadas 5 mil placas com suas respectivas localizações, essas são enviadas para o banco de dados apenas quando o usuário acessar o localhost:8080.