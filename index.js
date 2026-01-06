import express from 'express'
import longestCommonPalindrome from './lps.js'

const app = express()

app.get('/name', (req, res) => {
  const { str1, str2 } = req.query

  if (!str1 || !str2) {
    return res.status(400).send('Please provide str1 and str2')
  }

  const result = longestCommonPalindrome(str1, str2)

  res.json({
    str1,
    str2,
    longestCommonPalindrome: result,
    length: result.length
  })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
