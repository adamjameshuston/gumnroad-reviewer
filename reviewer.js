const productList = [
    {
        "name": "The Minimalist Entrepreneur, Part One",
        "id": 0
    },
    {
        "name": "The Minimalist Entrepreneur, Part Two",
        "id": 1
    },
    {
        "name": "The Minimalist Entrepreneur, Part Three",
        "id": 2
    }
]

const reviewList = [
    {
        "id": 0,
        "productID": 1,
        "rating": 0.0,
        "author": "test",
        "comment": "this is the comment"
    },
    {
        "id": 1,
        "productID": 1,
        "rating": 3,
        "author": "test",
        "comment": "another comment"
    },
    {
        "id": 2,
        "productID": 1,
        "rating": 4,
        "author": "test",
        "comment": "a third comment"
    }
]

let overlay = document.getElementById('overlay')
let cancelbutton = document.getElementById('cancel')
let submitbutton = document.getElementById('submit')
let submitTarget = 0

function open(e) {
    console.log(e.target.id)
    submitTarget = e.target.id
    overlay.style.display = "flex"
}

function cancel() {
    overlay.style.display = "none"
}

function submit() {
    reviewList.push({
        "id": 1234,
        "productID": parseInt(submitTarget),
        "rating": 4,
        "author": "test",
        "comment": "an added comment"
        })
    console.log('wowwww')
    console.log(reviewList)
    cancel()
    location.reload()
}

cancelbutton.addEventListener('click', cancel, false)
submitbutton.addEventListener('click', submit, false)

const container = document.getElementById("productList")

function displayProducts(items, reviews) {

    items.forEach(item => {

        const cardStyle = document.getElementById('samplecard')
        
        let card = cardStyle.cloneNode(true)
    
        card.style.display = 'block'
        card.setAttribute('class', 'card')
        const cardHeading = card.getElementsByTagName('H3')[0]
        const cardHeader = card.getElementsByClassName('productHeader')
        cardHeading.textContent = item.name
        const commentList = card.getElementsByTagName('div')[3]

        let ratingSum = 0.0
        let reviewNum = 0.0

        reviews.forEach(review => {

            let numberOfStars = review.rating
            let stars = 0
            let outlinedStars = 5

            if (review.productID == item.id) {
                let p = document.createElement('p')
                p.setAttribute('class', 'comment')

                let comment = document.createElement('div')
                comment.setAttribute('class', 'review')

                let starsContainer = document.createElement('div')
                starsContainer.setAttribute('class', 'starsContainer')

                while (numberOfStars > 0) {
                    let star = document.createElement('span')
                    star.textContent = "star"
                    star.setAttribute('class', 'material-icons')
                    starsContainer.appendChild(star)
                    numberOfStars = numberOfStars - 1
                    stars = stars + 1
                    
                }
                outlinedStars = 5 - stars
                while (outlinedStars > 0) {
                    let star = document.createElement('span')
                    star.textContent = "star_border"
                    star.setAttribute('class', 'material-icons')
                    starsContainer.appendChild(star)
                    outlinedStars = outlinedStars - 1
                }


                let text = document.createTextNode(review.comment)
                p.appendChild(text)
                comment.appendChild(starsContainer)
                comment.appendChild(p)

                commentList.appendChild(comment)

                ratingSum = ratingSum + review.rating
                reviewNum = reviewNum + 1.0
            }
        })

        const rating = card.getElementsByTagName('div')[2]
        let avgRating = (ratingSum / reviewNum).toFixed(2)

        let starsContainer = document.createElement('div')
        starsContainer.setAttribute('class', 'starsContainer')
        
        if (avgRating != "NaN" ) {
            rating.textContent = avgRating
        } else {
            rating.textContent = "0"
        }

        stars = 0

        while (avgRating > 0) {
            let star = document.createElement('span')
            star.textContent = "star"
            star.setAttribute('class', 'material-icons')
            starsContainer.appendChild(star)
            avgRating = avgRating - 1.0
            stars = stars + 1
        }
        outlinedStars = 5 - stars
        while (outlinedStars > 0) {
            let star = document.createElement('span')
            star.textContent = "star_border"
            star.setAttribute('class', 'material-icons')
            starsContainer.appendChild(star)
            outlinedStars = outlinedStars - 1
        }
        
        let button = document.createElement('button')
        button.textContent = "Add Review"
        button.setAttribute('class', 'add')
        button.setAttribute('id', item.id)
        button.addEventListener('click', open, false)
        rating.appendChild(starsContainer)
        rating.appendChild(button)
        container.appendChild(card)

        })
}


displayProducts(productList, reviewList)
