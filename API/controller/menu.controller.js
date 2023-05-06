exports.listmenu = async (req, res, next) => {
    try {
        res.status(200).json(
            [{
                "nome": "Contra Filé",
                "descricao": "Melhor peça do Contra Filé grelhado na brasa apenas com sal grosso",
                "preco": 50.00,
                "imagem": "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Filé Mignon",
                "descricao": "Melhor mignon grelhado na brasa e finalizado com manteiga de ervas",
                "preco": 75.00,
                "imagem": "https://images.unsplash.com/photo-1571162242324-f1607b1eceaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Ribeye (Importado)",
                "descricao": "Corte especial e importado do Ribeye, super macio, feito na brasa",
                "preco": 95.00,
                "imagem": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RlYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Costelinha Barbecue",
                "descricao": "Costelinha ao estilo americano, assada por 8 horas no smoker com barbecue artesanal!",
                "preco": 10.00,
                "imagem": "https://images.unsplash.com/photo-1544025162-d76694265947?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0ZWFrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=6"
            },
            {
                "nome": "Clássico",
                "descricao": "Hamburger clássico, 160g (pão de brioche, alface, tomate, maionese, queijo prato",
                "preco": 25.00,
                "imagem": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Chedar Bacon",
                "descricao": "Pão de brioche, hamburger 180g, picles, chedar e bacon!",
                "preco": 30.00,
                "imagem": "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Clássico",
                "descricao": "Hamburger clássico, 160g (pão de brioche, alface, tomate, maionese, queijo prato",
                "preco": 25.00,
                "imagem": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Chedar Bacon",
                "descricao": "Pão de brioche, hamburger 180g, picles, chedar e bacon!",
                "preco": 30.00,
                "imagem": "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                "nome": "Combo Clássico Burgão",
                "descricao": "Burger Clássico, batata frita e cerveja",
                "preco": 45.00,
                "imagem": "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJ1cmdlciUyMGNvbWJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }]
        );
    } catch (error) {
        throw error
    }
}