const movies = {
  "top-imdb": [
    {
      nameEn: "KGF Chapter 2",
      nameKn: "ಕೆಜಿಎಫ್ ಅಧ್ಯಾಯ 2",
      desEn: "Action-packed crime drama",
      desKn: "ಸಕ್ರಿಯ ಅಪರಾಧ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNkBLAG8H1ojElZBd98JZzuQLAuni0QbYow&s"
    },
    {
      nameEn: "Pailwaan",
      nameKn: "ಪೈಲ್ವಾನ್",
      desEn: "Wrestling sports drama",
      desKn: "ಕೈಕೆರಗಾಟ ಕ್ರೀಡಾ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eAsbS_xxI6LXoXG43yAZBCh09dsX8W4fnw&s:"
    },
    {
      nameEn: "Ugramm",
      nameKn: "ಉಗ್ರಮ್",
      desEn: "Crime action thriller",
      desKn: "ಅಪರಾಧ ಕ್ರಿಯಾ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5NTRjZDgtNzAyNi00ZjU0LWFjODgtYWE5ZGQ4N2UwNGI4XkEyXkFqcGc@._V1_.jpg"
    },
    {
      nameEn: "Bell Bottom",
      nameKn: "ಬೆಲ್ ಬಾಟಮ್",
      desEn: "Comedy thriller set in 1980s",
      desKn: "1980ರ ದಶಕದ ಹಾಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BM2EwN2EzODMtYmViMy00MDg2LWFmYWMtOTQ4NWI5ZGIwYjY0XkEyXkFqcGc@._V1_.jpg"},
    {
      nameEn: "Raajakumara",
      nameKn: "ರಾಜಕುಮಾರ",
      desEn: "Family drama",
      desKn: "ಕುಟುಂಬ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9kxbdo23emN_92GR_oBMTlkKRM7N1wZycg&s:"
    },
    {
      nameEn: "Roberrt",
      nameKn: "ರಾಬರ್ಟ್",
      desEn: "Action thriller",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Roberrt-movies-poster.jpg"
    },
    {
      nameEn: "James",
      nameKn: "ಜೇಮ್ಸ್",
      desEn: "Action entertainer",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಮನೋರಂಜನೆ",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/James_2022_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "RangiTaranga",
      nameKn: "ರಂಗಿಟರಂಗ",
      desEn: "Mystery thriller",
      desKn: "ರಹಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/4/47/2015_Kannada_film_Rangitaranga_poster.jpg" // CineMaterial poster (direct image link)
    },
    {
      nameEn: "Avane Srimannarayana",
      nameKn: "ಅವನೇ ಶ್ರೀಮನ್ನಾರಾಯಣ",
      desEn: "Fantasy action adventure",
      desKn: "ಕಲ್ಪನಾ ಕ್ರಿಯಾ ಸಾಹಸ",
      image: "https://upload.wikimedia.org/wikipedia/en/0/09/Avane_Srimannarayana_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "Kantara",
      nameKn: "ಕಾಂತಾರ",
      desEn: "Rural action drama",
      desKn: "ಗ್ರಾಮೀಣ ಕ್ರಿಯಾ ನಾಟಕ",
      image: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg" // New direct link from a major media host (Amazon/IMDb)
    }
  ],

  "based-watch": [
   
    {
      nameEn: "RangiTaranga",
      nameKn: "ರಂಗಿಟರಂಗ",
      desEn: "Mystery thriller",
      desKn: "ರಹಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/4/47/2015_Kannada_film_Rangitaranga_poster.jpg" // CineMaterial poster (direct image link)
    },
    {
      nameEn: "Avane Srimannarayana",
      nameKn: "ಅವನೇ ಶ್ರೀಮನ್ನಾರಾಯಣ",
      desEn: "Fantasy action adventure",
      desKn: "ಕಲ್ಪನಾ ಕ್ರಿಯಾ ಸಾಹಸ",
      image: "https://upload.wikimedia.org/wikipedia/en/0/09/Avane_Srimannarayana_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "Kantara",
      nameKn: "ಕಾಂತಾರ",
      desEn: "Rural action drama",
      desKn: "ಗ್ರಾಮೀಣ ಕ್ರಿಯಾ ನಾಟಕ",
      image: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg" // New direct link from a major media host (Amazon/IMDb)
    },
     {
      nameEn: "Bell Bottom",
      nameKn: "ಬೆಲ್ ಬಾಟಮ್",
      desEn: "Comedy thriller set in 1980s",
      desKn: "1980ರ ದಶಕದ ಹಾಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BM2EwN2EzODMtYmViMy00MDg2LWFmYWMtOTQ4NWI5ZGIwYjY0XkEyXkFqcGc@._V1_.jpg"},
    {
      nameEn: "Raajakumara",
      nameKn: "ರಾಜಕುಮಾರ",
      desEn: "Family drama",
      desKn: "ಕುಟುಂಬ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9kxbdo23emN_92GR_oBMTlkKRM7N1wZycg&s:"
    },
    {
      nameEn: "Roberrt",
      nameKn: "ರಾಬರ್ಟ್",
      desEn: "Action thriller",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Roberrt-movies-poster.jpg"
    },
    {
      nameEn: "James",
      nameKn: "ಜೇಮ್ಸ್",
      desEn: "Action entertainer",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಮನೋರಂಜನೆ",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/James_2022_poster.jpg" // Current best available direct link (Wikipedia)
    },
     {
      nameEn: "KGF Chapter 2",
      nameKn: "ಕೆಜಿಎಫ್ ಅಧ್ಯಾಯ 2",
      desEn: "Action-packed crime drama",
      desKn: "ಸಕ್ರಿಯ ಅಪರಾಧ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNkBLAG8H1ojElZBd98JZzuQLAuni0QbYow&s"
    },
    {
      nameEn: "Pailwaan",
      nameKn: "ಪೈಲ್ವಾನ್",
      desEn: "Wrestling sports drama",
      desKn: "ಕೈಕೆರಗಾಟ ಕ್ರೀಡಾ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eAsbS_xxI6LXoXG43yAZBCh09dsX8W4fnw&s:"
    },
    {
      nameEn: "Ugramm",
      nameKn: "ಉಗ್ರಮ್",
      desEn: "Crime action thriller",
      desKn: "ಅಪರಾಧ ಕ್ರಿಯಾ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5NTRjZDgtNzAyNi00ZjU0LWFjODgtYWE5ZGQ4N2UwNGI4XkEyXkFqcGc@._V1_.jpg"
    }
   
  ],

  "comedy": [
    {
      nameEn: "KGF Chapter 2",
      nameKn: "ಕೆಜಿಎಫ್ ಅಧ್ಯಾಯ 2",
      desEn: "Action-packed crime drama",
      desKn: "ಸಕ್ರಿಯ ಅಪರಾಧ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNkBLAG8H1ojElZBd98JZzuQLAuni0QbYow&s"
    },
    {
      nameEn: "Pailwaan",
      nameKn: "ಪೈಲ್ವಾನ್",
      desEn: "Wrestling sports drama",
      desKn: "ಕೈಕೆರಗಾಟ ಕ್ರೀಡಾ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eAsbS_xxI6LXoXG43yAZBCh09dsX8W4fnw&s:"
    },
    {
      nameEn: "Ugramm",
      nameKn: "ಉಗ್ರಮ್",
      desEn: "Crime action thriller",
      desKn: "ಅಪರಾಧ ಕ್ರಿಯಾ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5NTRjZDgtNzAyNi00ZjU0LWFjODgtYWE5ZGQ4N2UwNGI4XkEyXkFqcGc@._V1_.jpg"
    },
    {
      nameEn: "Bell Bottom",
      nameKn: "ಬೆಲ್ ಬಾಟಮ್",
      desEn: "Comedy thriller set in 1980s",
      desKn: "1980ರ ದಶಕದ ಹಾಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BM2EwN2EzODMtYmViMy00MDg2LWFmYWMtOTQ4NWI5ZGIwYjY0XkEyXkFqcGc@._V1_.jpg"},
    {
      nameEn: "Raajakumara",
      nameKn: "ರಾಜಕುಮಾರ",
      desEn: "Family drama",
      desKn: "ಕುಟುಂಬ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9kxbdo23emN_92GR_oBMTlkKRM7N1wZycg&s:"
    },
    {
      nameEn: "Roberrt",
      nameKn: "ರಾಬರ್ಟ್",
      desEn: "Action thriller",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Roberrt-movies-poster.jpg"
    },
    {
      nameEn: "James",
      nameKn: "ಜೇಮ್ಸ್",
      desEn: "Action entertainer",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಮನೋರಂಜನೆ",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/James_2022_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "RangiTaranga",
      nameKn: "ರಂಗಿಟರಂಗ",
      desEn: "Mystery thriller",
      desKn: "ರಹಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/4/47/2015_Kannada_film_Rangitaranga_poster.jpg" // CineMaterial poster (direct image link)
    },
    {
      nameEn: "Avane Srimannarayana",
      nameKn: "ಅವನೇ ಶ್ರೀಮನ್ನಾರಾಯಣ",
      desEn: "Fantasy action adventure",
      desKn: "ಕಲ್ಪನಾ ಕ್ರಿಯಾ ಸಾಹಸ",
      image: "https://upload.wikimedia.org/wikipedia/en/0/09/Avane_Srimannarayana_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "Kantara",
      nameKn: "ಕಾಂತಾರ",
      desEn: "Rural action drama",
      desKn: "ಗ್ರಾಮೀಣ ಕ್ರಿಯಾ ನಾಟಕ",
      image: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg" // New direct link from a major media host (Amazon/IMDb)
    }
  ],

  "new-releases": [
    {
      nameEn: "Roberrt",
      nameKn: "ರಾಬರ್ಟ್",
      desEn: "Action thriller",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Roberrt-movies-poster.jpg"
    },
    {
      nameEn: "James",
      nameKn: "ಜೇಮ್ಸ್",
      desEn: "Action entertainer",
      desKn: "ಕ್ರಿಯಾತ್ಮಕ ಮನೋರಂಜನೆ",
      image: "https://upload.wikimedia.org/wikipedia/en/7/7b/James_2022_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "RangiTaranga",
      nameKn: "ರಂಗಿಟರಂಗ",
      desEn: "Mystery thriller",
      desKn: "ರಹಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://upload.wikimedia.org/wikipedia/en/4/47/2015_Kannada_film_Rangitaranga_poster.jpg" // CineMaterial poster (direct image link)
    },
    {
      nameEn: "Avane Srimannarayana",
      nameKn: "ಅವನೇ ಶ್ರೀಮನ್ನಾರಾಯಣ",
      desEn: "Fantasy action adventure",
      desKn: "ಕಲ್ಪನಾ ಕ್ರಿಯಾ ಸಾಹಸ",
      image: "https://upload.wikimedia.org/wikipedia/en/0/09/Avane_Srimannarayana_poster.jpg" // Current best available direct link (Wikipedia)
    },
    {
      nameEn: "Kantara",
      nameKn: "ಕಾಂತಾರ",
      desEn: "Rural action drama",
      desKn: "ಗ್ರಾಮೀಣ ಕ್ರಿಯಾ ನಾಟಕ",
      image: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg" // New direct link from a major media host (Amazon/IMDb)
    },
    {
      nameEn: "KGF Chapter 2",
      nameKn: "ಕೆಜಿಎಫ್ ಅಧ್ಯಾಯ 2",
      desEn: "Action-packed crime drama",
      desKn: "ಸಕ್ರಿಯ ಅಪರಾಧ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNkBLAG8H1ojElZBd98JZzuQLAuni0QbYow&s"
    },
    {
      nameEn: "Pailwaan",
      nameKn: "ಪೈಲ್ವಾನ್",
      desEn: "Wrestling sports drama",
      desKn: "ಕೈಕೆರಗಾಟ ಕ್ರೀಡಾ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eAsbS_xxI6LXoXG43yAZBCh09dsX8W4fnw&s:"
    },
    {
      nameEn: "Ugramm",
      nameKn: "ಉಗ್ರಮ್",
      desEn: "Crime action thriller",
      desKn: "ಅಪರಾಧ ಕ್ರಿಯಾ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BMmE5NTRjZDgtNzAyNi00ZjU0LWFjODgtYWE5ZGQ4N2UwNGI4XkEyXkFqcGc@._V1_.jpg"
    },
    {
      nameEn: "Bell Bottom",
      nameKn: "ಬೆಲ್ ಬಾಟಮ್",
      desEn: "Comedy thriller set in 1980s",
      desKn: "1980ರ ದಶಕದ ಹಾಸ್ಯ ಥ್ರಿಲ್ಲರ್",
      image: "https://m.media-amazon.com/images/M/MV5BM2EwN2EzODMtYmViMy00MDg2LWFmYWMtOTQ4NWI5ZGIwYjY0XkEyXkFqcGc@._V1_.jpg"},
    {
      nameEn: "Raajakumara",
      nameKn: "ರಾಜಕುಮಾರ",
      desEn: "Family drama",
      desKn: "ಕುಟುಂಬ ನಾಟಕ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9kxbdo23emN_92GR_oBMTlkKRM7N1wZycg&s:"
    }
    
  ]
};