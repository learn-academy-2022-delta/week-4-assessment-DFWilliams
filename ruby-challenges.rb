# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd num
    if num.odd?
        "#{num} is odd"
    else 
        "#{num} is even"
    end
end

p even_or_odd num1 #output: "7 is odd"
p even_or_odd num2 #output: "42 is even"
p even_or_odd num3 #output: "221 is odd"




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def delete_vowels string
    string.delete ("aeiouAEIOU")
end
p delete_vowels album1 #output "Rbbr Sl"
p delete_vowels album2 #output "Sgt Pppr"
p delete_vowels album3 #output "bby Rd"



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def word_remix string
    if string.downcase == string.downcase.reverse
        "#{string} is a palidrome"
    else 
        "#{string} is not palidrome"
    end
end

p word_remix palindrome_tester1 #output: "Racecar is a palidrome"

p word_remix palindrome_tester2 #output: "LEARN is not palidrome"

p word_remix palindrome_tester3 #output: "Rotator is a palidrome"
