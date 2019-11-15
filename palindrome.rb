def palindrome?(string)
 if string == string.reverse
   return true
 else
   puts “String is not a palindrome”
 end
end

# test with the following:
palindrome?(“Friday”)
# “String is not a palindrome”
palindrome?(“abba”)
# true
