function factorial(n)
   {
    if ((n == 0) || (n == 1))
     return 1;
     
    var result = n; 
    
    for (cont = n; cont > 1; cont--)
     result = result * (cont-1);
    
    return result; 
   }