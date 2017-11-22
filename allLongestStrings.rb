Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

def allLongestStrings(inputArray)
    max = inputArray.map(&:length).max
# inputArray.map{|el| el.length}.max = inputArray.map(&:length).max
    inputArray.select {|el| el.length == max}
end
