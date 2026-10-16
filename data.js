/* Sapientia – lote 1. Formato personajes: nombre|campo|años. Eventos: nombre|año|tipo.
   El nombre debe coincidir con el título del artículo en es.wikipedia.org (sirve para foto, resumen y frases). */
var DATA={p:`
Marie Curie|Ciencia|1867–1934
Isaac Newton|Ciencia|1643–1727
Albert Einstein|Ciencia|1879–1955
Galileo Galilei|Ciencia|1564–1642
Charles Darwin|Ciencia|1809–1882
Nicolás Copérnico|Ciencia|1473–1543
Johannes Kepler|Ciencia|1571–1630
Stephen Hawking|Ciencia|1942–2018
Rosalind Franklin|Ciencia|1920–1958
Louis Pasteur|Ciencia|1822–1895
Gregor Mendel|Ciencia|1822–1884
Niels Bohr|Ciencia|1885–1962
Max Planck|Ciencia|1858–1947
Carl Sagan|Ciencia|1934–1996
Jane Goodall|Ciencia|1934–
Alexander von Humboldt|Ciencia|1769–1859
Antoine Lavoisier|Ciencia|1743–1794
Dmitri Mendeléyev|Ciencia|1834–1907
Michael Faraday|Ciencia|1791–1867
James Clerk Maxwell|Ciencia|1831–1879
Pitágoras|Matemáticas|c. 570–495 a. C.
Euclides|Matemáticas|c. 300 a. C.
Arquímedes|Matemáticas|c. 287–212 a. C.
Hipatia|Matemáticas|c. 355–415
Carl Friedrich Gauss|Matemáticas|1777–1855
Leonhard Euler|Matemáticas|1707–1783
Ada Lovelace|Matemáticas|1815–1852
Alan Turing|Matemáticas|1912–1954
Srinivasa Ramanujan|Matemáticas|1887–1920
Emmy Noether|Matemáticas|1882–1935
Blaise Pascal|Matemáticas|1623–1662
René Descartes|Matemáticas|1596–1650
Hipócrates|Medicina|c. 460–370 a. C.
Avicena|Medicina|980–1037
Edward Jenner|Medicina|1749–1823
Alexander Fleming|Medicina|1881–1955
Florence Nightingale|Medicina|1820–1910
Santiago Ramón y Cajal|Medicina|1852–1934
Sigmund Freud|Medicina|1856–1939
Elizabeth Blackwell|Medicina|1821–1910
Jonas Salk|Medicina|1914–1995
Carlos Finlay|Medicina|1833–1915
Thomas Edison|Inventos|1847–1931
Nikola Tesla|Inventos|1856–1943
Johannes Gutenberg|Inventos|c. 1400–1468
Alexander Graham Bell|Inventos|1847–1922
Guglielmo Marconi|Inventos|1874–1937
Orville Wright|Inventos|1871–1948
James Watt|Inventos|1736–1819
Benjamin Franklin|Inventos|1706–1790
Henry Ford|Inventos|1863–1947
Alessandro Volta|Inventos|1745–1827
Hedy Lamarr|Inventos|1914–2000
Grace Hopper|Tecnología|1906–1992
Tim Berners-Lee|Tecnología|1955–
Steve Jobs|Tecnología|1955–2011
Bill Gates|Tecnología|1955–
Sócrates|Filosofía|470–399 a. C.
Platón|Filosofía|c. 427–347 a. C.
Aristóteles|Filosofía|384–322 a. C.
Confucio|Filosofía|551–479 a. C.
Laozi|Filosofía|siglo VI a. C.
Immanuel Kant|Filosofía|1724–1804
Friedrich Nietzsche|Filosofía|1844–1900
Simone de Beauvoir|Filosofía|1908–1986
Baruch Spinoza|Filosofía|1632–1677
Lucio Anneo Séneca|Filosofía|c. 4 a. C.–65
Marco Aurelio|Filosofía|121–180
Epicteto|Filosofía|c. 50–135
Tomás de Aquino|Filosofía|1225–1274
Hannah Arendt|Filosofía|1906–1975
Voltaire|Filosofía|1694–1778
Jean-Jacques Rousseau|Filosofía|1712–1778
Averroes|Filosofía|1126–1198
Ludwig Wittgenstein|Filosofía|1889–1951
Miguel de Cervantes|Literatura|1547–1616
William Shakespeare|Literatura|1564–1616
Dante Alighieri|Literatura|1265–1321
Homero|Literatura|siglo VIII a. C.
Gabriel García Márquez|Literatura|1927–2014
Jorge Luis Borges|Literatura|1899–1986
Pablo Neruda|Literatura|1904–1973
Federico García Lorca|Literatura|1898–1936
Víctor Hugo|Literatura|1802–1885
Fiódor Dostoyevski|Literatura|1821–1881
Lev Tolstói|Literatura|1828–1910
Virginia Woolf|Literatura|1882–1941
Mario Vargas Llosa|Literatura|1936–2025
César Vallejo|Literatura|1892–1938
Ricardo Palma|Literatura|1833–1919
Octavio Paz|Literatura|1914–1998
Sor Juana Inés de la Cruz|Literatura|1648–1695
Gabriela Mistral|Literatura|1889–1957
Jane Austen|Literatura|1775–1817
Johann Wolfgang von Goethe|Literatura|1749–1832
Inca Garcilaso de la Vega|Literatura|1539–1616
José María Arguedas|Literatura|1911–1969
Leonardo da Vinci|Arte|1452–1519
Miguel Ángel|Arte|1475–1564
Rafael Sanzio|Arte|1483–1520
Vincent van Gogh|Arte|1853–1890
Pablo Picasso|Arte|1881–1973
Frida Kahlo|Arte|1907–1954
Diego Velázquez|Arte|1599–1660
Francisco de Goya|Arte|1746–1828
Rembrandt|Arte|1606–1669
Claude Monet|Arte|1840–1926
Salvador Dalí|Arte|1904–1989
Auguste Rodin|Arte|1840–1917
Antoni Gaudí|Arte|1852–1926
Fernando de Szyszlo|Arte|1925–2017
Diego Rivera|Arte|1886–1957
Johann Sebastian Bach|Música|1685–1750
Wolfgang Amadeus Mozart|Música|1756–1791
Ludwig van Beethoven|Música|1770–1827
Frédéric Chopin|Música|1810–1849
Antonio Vivaldi|Música|1678–1741
Piotr Ilich Chaikovski|Música|1840–1893
Yma Súmac|Música|1922–2008
Chabuca Granda|Música|1920–1983
Violeta Parra|Música|1917–1967
Louis Armstrong|Música|1901–1971
Giuseppe Verdi|Música|1813–1901
Claude Debussy|Música|1862–1918
Alejandro Magno|Líderes|356–323 a. C.
Julio César|Líderes|100–44 a. C.
Cleopatra|Líderes|69–30 a. C.
Isabel I de Castilla|Líderes|1451–1504
Pachacútec|Líderes|c. 1418–1471
Simón Bolívar|Líderes|1783–1830
José de San Martín|Líderes|1778–1850
Abraham Lincoln|Líderes|1809–1865
Napoleón Bonaparte|Líderes|1769–1821
Winston Churchill|Líderes|1874–1965
Túpac Amaru II|Líderes|1738–1781
Octavio Augusto|Líderes|63 a. C.–14
Catalina II de Rusia|Líderes|1729–1796
Ciro II el Grande|Líderes|c. 600–530 a. C.
Ramón Castilla|Líderes|1797–1867
Aníbal|Militares|247–183 a. C.
Sun Tzu|Militares|c. 544–496 a. C.
Gengis Kan|Militares|c. 1162–1227
Saladino|Militares|1137–1193
Arthur Wellesley|Militares|1769–1852
Miguel Grau|Militares|1834–1879
Francisco Bolognesi|Militares|1816–1880
Antonio José de Sucre|Militares|1795–1830
Carlomagno|Militares|c. 742–814
Bernardo O'Higgins|Militares|1778–1842
Andrés Avelino Cáceres|Militares|1836–1923
Juana de Arco|Militares|c. 1412–1431
Dwight D. Eisenhower|Militares|1890–1969
Gueorgui Zhúkov|Militares|1896–1974
Leónidas I|Militares|m. 480 a. C.
Escipión el Africano|Militares|236–183 a. C.
Mahatma Gandhi|Paz y derechos|1869–1948
Martin Luther King Jr.|Paz y derechos|1929–1968
Nelson Mandela|Paz y derechos|1918–2013
Madre Teresa de Calcuta|Paz y derechos|1910–1997
Malala Yousafzai|Paz y derechos|1997–
Rosa Parks|Paz y derechos|1913–2005
Bartolomé de las Casas|Paz y derechos|1484–1566
Frederick Douglass|Paz y derechos|1818–1895
Emmeline Pankhurst|Paz y derechos|1858–1928
Simone Veil|Paz y derechos|1927–2017
Cristóbal Colón|Exploración|1451–1506
Marco Polo|Exploración|1254–1324
Fernando de Magallanes|Exploración|1480–1521
Neil Armstrong|Exploración|1930–2012
Yuri Gagarin|Exploración|1934–1968
Amelia Earhart|Exploración|1897–1937
Ibn Battuta|Exploración|1304–1368
Roald Amundsen|Exploración|1872–1928
Zheng He|Exploración|1371–1433
Hiram Bingham III|Exploración|1875–1956
Valentina Tereshkova|Exploración|1937–
Edmund Hillary|Exploración|1919–2008
María Montessori|Educación|1870–1952
Paulo Freire|Educación|1921–1997
Jean Piaget|Educación|1896–1980
Lev Vygotski|Educación|1896–1934
John Dewey|Educación|1859–1952
Johann Heinrich Pestalozzi|Educación|1746–1827
Jorge Basadre|Educación|1903–1980
José Carlos Mariátegui|Educación|1894–1930
Adam Smith|Economía|1723–1790
John Maynard Keynes|Economía|1883–1946
Amartya Sen|Economía|1933–
Muhammad Yunus|Economía|1940–
`,e:`
Revolución francesa|1789–1799|Revolución
Revolución industrial|1760–1840|Transformación
Revolución científica|siglos XVI–XVII|Ciencia
Revolución rusa|1917|Revolución
Reforma protestante|1517|Religión y cultura
Renacimiento|siglos XIV–XVI|Cultura
Ilustración|siglo XVIII|Cultura
Imprenta|c. 1450|Ciencia
Peste negra|1347–1353|Sociedad
Descubrimiento de América|1492|Exploración
Toma de Constantinopla|1453|Batalla
Batalla de Maratón|490 a. C.|Batalla
Batalla de las Termópilas|480 a. C.|Batalla
Batalla de Gaugamela|331 a. C.|Batalla
Batalla de Zama|202 a. C.|Batalla
Batalla de Lepanto|1571|Batalla
Batalla de Trafalgar|1805|Batalla
Batalla de Waterloo|1815|Batalla
Batalla de Boyacá|1819|Batalla
Independencia del Perú|1821|Independencia
Batalla de Pichincha|1822|Batalla
Batalla de Junín|1824|Batalla
Batalla de Ayacucho|1824|Batalla
Combate de Angamos|1879|Batalla
Batalla de Arica|1880|Batalla
Primera Guerra Mundial|1914–1918|Guerra
Segunda Guerra Mundial|1939–1945|Guerra
Descubrimiento de la penicilina|1928|Ciencia
Apolo 11|1969|Exploración
Caída del Muro de Berlín|1989|Sociedad
`};
