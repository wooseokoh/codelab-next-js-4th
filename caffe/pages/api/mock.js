export default function handler(req, res) {
    res.status(200).json({
        meta: {
            currentPage: 1,
            totalPageL: 10
        },
        posts: [
            {id: '1', subjet: 'subject', content: 'content'}
        ]
    })
}
  