const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar o CORS para todas as origens
app.use(cors());

// Dados estáticos sobre flores
const flores = [
  {
    nome: 'Abeto',
    nomeCientifico: 'Abies spp.',
    linguagem: 'Elevação; Amizade; Altura; Honestidade; Longevidade; Manifestação; Percepção; Progresso; Lembrança; Resiliência; Tempo',
    imagem: '/public/Imagens/001.webp'
  },
  {
    nome: 'Abutilão',
    nomeCientifico: 'Abutilon spp.',
    linguagem: 'Iluminação; Meditação',
    imagem: '/public/Imagens/002.webp'
  },
  {
    nome: 'Acácia, Mimosa',
    nomeCientifico: 'Acacia spp.',
    linguagem: 'Amor casto; Amor oculto; Elegância; Resistência da alma; Amizade; Imortalidade; Amor platônico; Pureza; Ressurreição; Amor em segredo; Sensibilidade',
    imagem: '/public/Imagens/003.jpg'
  },
  {
    nome: 'Acanto-manso, Pé-de-urso',
    nomeCientifico: 'Acanthus mollis',
    linguagem: 'Arte; Artifício; Belas artes; Miséria.',
    imagem: '/public/Imagens/004.jpg'
  },
  {
    nome: 'Bordo',
    nomeCientifico: 'Acer spp.',
    linguagem: 'Reserva; Longevidade; Riqueza.',
    imagem: '/public/Imagens/005.jpeg'
  },
  {
    nome: 'Milefólio, Erva-dos-carpinteiros, Mil-folhas',
    nomeCientifico: 'Achillea millefolium',
    linguagem: 'Coragem; Cura; Mágoa; Amor; Poderes psíquicos; Guerra',
    imagem: '/public/Imagens/006.jpg'
  },
  {
    nome: 'Acônito',
    nomeCientifico: 'Aconitum napellus',
    linguagem: 'Um inimigo se aproxima; Cuidado; Cavalheirismo; Perigo; Enganação; Amor fraterno; Galantaria; Cavaleiro; Misantropia; Palavras venenosas; Temperança; Traição',
    imagem: '/public/Imagens/007.jpg'
  },
  {
    nome: 'Açoro, Lírio-dos-cheiros',
    nomeCientifico: 'Acorus calamus',
    linguagem: 'Afeto; Agitação; Afrodisíaco; Desilução; Lamentação; Luxúria',
    imagem: '/public/Imagens/008.jpg'
  },
  {
    nome: 'Rosa',
    nomeCientifico: 'Rosa spp.',
    linguagem: 'De forma geral, Equilíbrio; Beleza; Segredo; Compreensão; Divinação; Cura; Esperança e paixão; Amor; Sorte; Magia; Mensageira do amor; Perfeição; Proteção; Poderes psíquicos; Força através do silêncio. Ainda pode apresentar outros significados específicos de cada cor.',
    imagem: '/public/Imagens/Rosa.webp'
  },
  {
    nome: 'Margarida',
    nomeCientifico: 'Bellis perennis',
    linguagem: 'Beleza; Inocência; Alegria; Infância; Apreciar as pequenas coisas da vida; Criatividade; Você me ama?; Fé; Atitude jovial; Gentileza; Compartilho de teus sentimentos; Empatia; Nunca vou contar; Amor leal; Pureza; Simplicidade; Força; Virtudes',
    imagem: '/public/Imagens/Margarida.webp'
  },
  {
    nome: 'Lírio',
    nomeCientifico: 'Lilium spp.',
    linguagem: 'Beleza; Nascimento; Devoção; Divindade; Inalcançável; Honra; Humildade; Magnificência; Majestade; Modéstia; Religião; Orgulho; Pureza; Coração puro; Doçura. Ainda pode ter mais significados específicos de acordo com a cor.',
    imagem: '/public/Imagens/Lírio.jpg'
  },
  {
    nome: 'Gérbera',
    nomeCientifico: 'Gerbera spp.',
    linguagem: 'Inocência; Pureza; Força',
    imagem: '/public/Imagens/Gerbera.webp'
  },
  {
    nome: 'Hortênsia',
    nomeCientifico: 'Hydrangea spp.',
    linguagem: 'Descuido; Devoção; Falso orgulho; Frigidez; Gratidão; Te agradeço do fundo do meu coração; Insensibilidade; Orgulho; Lembrança; Crueldade; Obrigado por entender; Glória vã; Você é frio.',
    imagem: '/public/Imagens/Hortensia.webp'
  }
];

// Ordenar as flores em ordem alfabética pelo nome
const ordenarFlores = () => {
  flores.sort((a, b) => a.nome.localeCompare(b.nome));
};

// Endpoint para buscar todas as flores
app.get('/api/flores', (req, res) => {
  ordenarFlores(); // Ordena as flores antes de enviar
  res.json(flores);
});

// Endpoint para buscar informações sobre uma flor específica
app.get('/api/flores/:nome', (req, res) => {
  const nomeFlor = req.params.nome.toLowerCase();
  const flor = flores.find(f => f.nome.toLowerCase() === nomeFlor);
  if (flor) {
    res.json(flor);
  } else {
    res.status(404).json({ message: 'Flor não encontrada' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});