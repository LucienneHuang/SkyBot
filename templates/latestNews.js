export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://img2.storyblok.com/fit-in/0x400/filters:format(webp)/f/108104/1920x1080/feb1f282dd/colorgeyser_header.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '4:5',
        gravity: 'center'
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'NEWS',
                    color: '#FFFFFF',
                    size: 'xl',
                    weight: 'bold',
                    style: 'italic',
                    align: 'center'
                  }
                ],
                backgroundColor: '#ff000080'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'text',
                    text: 'Build Something Beautiful Together During Days of Color',
                    size: 'xl',
                    color: '#ffffff',
                    wrap: true,
                    margin: 'none'
                  }
                ],
                backgroundColor: '#00000080',
                margin: 'sm'
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: [
                      {
                        type: 'text',
                        text: 'Date',
                        color: '#ffffff',
                        size: 'md',
                        flex: 0,
                        align: 'start',
                        weight: 'regular',
                        decoration: 'none',
                        wrap: true
                      },
                      {
                        type: 'text',
                        text: 'May 31 2023',
                        color: '#ffffff',
                        decoration: 'none',
                        size: 'md',
                        align: 'end',
                        wrap: true
                      }
                    ],
                    flex: 0,
                    spacing: 'lg',
                    paddingTop: '5px'
                  }
                ]
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'uri',
                      label: 'More Info',
                      uri: 'http://linecorp.com/'
                    },
                    style: 'secondary',
                    offsetTop: 'none',
                    height: 'sm',
                    margin: 'xl'
                  }
                ]
              }
            ],
            spacing: 'xs'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        paddingAll: '20px',
        margin: 'none'
      }
    ],
    paddingAll: '0px',
    margin: 'none'
  }
}
