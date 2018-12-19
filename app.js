var fs=require("fs")

function Read(Remove){
    let story = fs.readFileSync('story.txt').toString().split(" ")
    Remove(story,Freq)
}

function Remove(story,Freq){
    let stopwords = fs.readFileSync('stopwords.txt').toString().split(",")
    storyAfterRemove=[]
    for(let i in story)
        if(!stopwords.includes(story[i])){
            storyAfterRemove.push(story[i])
        }
    Freq(storyAfterRemove,Sort)
}

function Freq(story,Sort){
    let storyAfterFreq=[]
    for(let i in story){
        if(storyAfterFreq.find(x => x.key === story[i])){
            storyAfterFreq.find(x => x.key === story[i]).count++
        }else{
            storyAfterFreq.push({key:story[i],count:1})
        }
    }
    Sort(storyAfterFreq,Sort)
}

function Sort(storyAfterFreq,Sort){
   console.log(storyAfterFreq.sort((a,b) =>  b.count - a.count))
}

Read(Remove);