// Regular expressions = Regex = Regexp(Terminology)

/*
Character Classes part 1
[] -> you will use the character inside brackets
Example:
Source text:
dahwehdfEIOoiewsfjslkçABCakpoweqwjdikweriwojdA
--------------------------------------------
[aeiou] -> Will select only the vowels and individually(In the case, lowercase)
[a-z] -> will select characters from a to z(In the case, lowercase)
[AEIOU] -> Will select only the vowels and individually(In the case, capital letters)
[A1-b-C4] -> will select all digits especifics and all numbers.
[0-9]  -> Will select only digits
--------------------------------------------

Negate Matches
[^a-z] --> The alphabet(letters a-z in lowercase) will be negation(^ = symbol of negation)
[\-a-z] --> backslash for search a literal dash- procura literalmente os caracteres especificados.
[\ -~]  --> everything is selected


Alternations

example:
cat | dog | fish | bird  --> you can select a list using |


Metacharacters

.  --> will be select all characters
\. --> will be select only point
\w  --> will select characters 
\d  --> only digits will be selected(numbers)
\D  --> negation of all digits(numbers)
\t  --> will match tabs
\n  -->  will select new lines or line breaks
\s  --> will select all spaces, tab, line break, new line.
\   --> Quando você quer selecionar apenas espaços especificos.
\[\]  --> selecionar colchetes


Quantifiers

Examples:

Hello how are you?
[a - z]+ --> will select all different words

462439834653245729835629387568934
[0-9]+  --> select all

<p>paragraph 1</p><p>paragraph 2</p><p>paragraph 3</p>
<p>.*</p>  --> match everything
/<p>?/;   

http://website.com
https://website2.com
https\?://.*
https?://.*

------------------------------------

8*
8...
8{8}
8{8,2}?
88888 -> will select all

--------------------------------

















*/ 

