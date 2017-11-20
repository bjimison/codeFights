def addBorder(picture)
    len = picture[0].length 
    border = ""
    len.times{border += "*"}
    picture.insert(0, border)
    picture.insert(-1, border)
    
    (1...picture.length).each do |idx|
        picture[idx].insert(0, "*")
        picture[idx].insert(-1, "*")
    end 
    return picture 
end

picture = ["abc",
           "ded"]
print addBorder(picture)