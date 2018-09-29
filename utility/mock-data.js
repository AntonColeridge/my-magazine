
const categories = [

    { id: 1, name: 'ART' },
    { id: 2, name: 'Music' },

];

const stories = [
    {
        id: 1,
        categoryId: 1,
        name: 'brush strokes 101',
        content: 'lorem ipsum',
        visitors: 234
    },
    {
        id: 2,
        categoryId: 1,
        name: 'primary colours and how to get more',
        content: 'lorem ipsum',
        visitors: 234
    },
    {
        id: 3,
        categoryId: 2,
        name: 'reading notes 101',
        content: 'lorem ipsum',
        visitors: 234
    },
    {
        id: 4,
        categoryId: 2,
        name: 'Guitar or Drums? How to Decide',
        content: 'lorem ipsum',
        visitors: 234
    },
]

const subscibers = [
    {
        id: 1,
        username: 'bob1'
    }, {
        id: 2,
        username: 'jane2'
    }, {
        id: 3,
        username: 'dave3'
    }
]
//junction table to split many to many relationship,
// also used to calculate number of subscibers 
// set so that 3 people subscibed to art and 1 person subscribed to music
const categorySubscibers = [
    {
        categoryId: 1,
        subscriptionId: 1

    }, {
        categoryId: 1,
        subscriptionId: 2
    }, {
        categoryId: 1,
        subscriptionId: 3
    }, {
        categoryId: 2,
        subscriptionId: 3
    }

]





  
module.exports = {
    categories,
    stories,
    subscibers,
    categorySubscibers
  
}