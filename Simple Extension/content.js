const getDetails = ()=>{
    let userName = document.querySelector('h1').innerHTML.replace(/\s/g, '')
    let place = document.getElementsByClassName('pv-text-details__left-panel mt2')[0].querySelector("span").innerHTML.replace(/\s/g, '')
    
    return {
        userName,
        place
    }
}


const getContactInfo = ()=>{
    
    return new Promise((resolve,reject)=>{

    
    document.getElementById("top-card-text-details-contact-info").click()


    
    let contactInfo = {
        linkedIn: "",
        email: "",
    }

    setTimeout(()=>{
        try {
            // Get Data
            contactInfo.linkedIn = document.getElementsByClassName("artdeco-modal__content")[0].getElementsByClassName("pv-contact-info__ci-container")[0].querySelector("a").innerHTML.replace(/\s/g, '')
            contactInfo.email = document.getElementsByClassName("artdeco-modal__content")[0].getElementsByClassName("pv-contact-info__ci-container")[1].querySelector("a").innerHTML.replace(/\s/g, '')

            // Return Data
            resolve(contactInfo)

            // Close the Modal
            document.getElementsByClassName("artdeco-modal__dismiss")[0].click()
        } catch (error) {
            document.getElementsByClassName("artdeco-modal__dismiss")[0].click()
            reject(contactInfo) 
        }
      
    },5000)

})}


const logUserData = async ()=>{

    const contacts = await getContactInfo()
        .then(data => {return data})
        .catch(error => {return error})

    const userInfo = {
            name: getDetails().userName,
            place: getDetails().place,
            contactDetails: contacts
        }

    console.log(userInfo)

}

logUserData()




  
