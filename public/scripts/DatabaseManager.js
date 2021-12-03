function CreateSkill(user, name, description, eachInterval){
    let Skills = {}
    Skills[name] = {
        description: description,
        interval: eachInterval,
        iterations: {

        }
    }
    console.log(Skills)
    db.collection("users").doc(user.uid).set({
        Skills
    }, { merge: true }).then(function(){
        window.location.assign("main.html");
    })
}

async function NewUser(user){
    await db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        Skills: {
            
        }
    })
}

function setActiveStreak(id, id2){
    localStorage.setItem('activeStreak', id);
    localStorage.setItem('frequency', id2);
}