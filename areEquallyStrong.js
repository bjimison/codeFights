Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourRight >= yourLeft){
        return ((yourRight == friendsRight || yourRight == friendsLeft) && (yourRight + yourLeft == friendsRight + friendsLeft))
    }
    if(yourLeft >= yourRight){
        return ((yourLeft == friendsLeft || yourLeft == friendsRight) && (yourRight + yourLeft == friendsRight + friendsLeft))
    }
         
   return false      
}

(TestCases)
[yourLeft: 15
yourRight: 10
friendsLeft: 15
friendsRight: 10]

[yourLeft: 1
yourRight: 1
friendsLeft: 1
friendsRight: 1]

