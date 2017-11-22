You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

def reverseParentheses(s) 
    arr = []
    word = ""
    s.chars.each do |char|
        if char == "("
            arr.push word
            word = ""
        elsif char == ")"
            word = arr.pop + word.reverse 
        else 
            word += char 
        end 
    end 
    return word 
end

s: "a(bc)de"
s: "co(de(fight)s)"