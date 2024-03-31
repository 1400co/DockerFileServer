para consumir este api debe enviarse asi:

curl --request POST \
  --url http://localhost:3000/upload \
  --header 'Authorization: 123456789' \
  --header 'content-type: multipart/form-data' \
  --form 'file=@C:\Users\oscar\Downloads\DIGELAS.pdf'

  http://localhost:3000/video/file-1711852293177.pdf


  curl --request DELETE \
  --url http://localhost:3000/delete/ColagenoGanoderma.pdf \
  --header 'Authorization: 123456789'