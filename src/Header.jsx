function Header() {
    const data = [1, 2, 3];
    const newData = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            // 'subArray': [
            //     {
            //         "userId": 1,
            //         "id": 1,
            //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            //         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            //     },
            //     {
            //         "userId": 1,
            //         "id": 1,
            //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            //         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            //     },
            // ]
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]

    const printdata = (item, index) => {
        console.log(item);
        if(item.subArray) {
            item?.subArray?.forEach(printdata)
        }
    }

    newData.forEach(printdata)

    console.log(newData);
    

    return (
        <div>Header
            {newData.map((item, index)=> {
                return(
                    <div>{item.title}</div>
                )
            })}
        </div>
    )
}

export default Header;