import React from 'react'

import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>Tombé là par hasard dans Paris, aucun regret! Très bon accueil et idem pour les deux plats commandé. Bonne ambiance, personnel très sympathique. Je recommande ce lieu.</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Donovan PEROU',
    avatarSrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu83UL7asNl7J0Qs1b9UXlyncj96WkqJtDvYflgipQ=w120-h120-p-rp-mo-ba4-br100',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Très, très bien accueilli et le repas était vraiment bon 😀
Je recommande à 💯 % ce restaurant 😍</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Mélanie LEFÈVRE',
    avatarSrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu-lVtBrCwfscn-m_wTIqn5J1toJ9K0nvoUN6fc1qg=w120-h120-p-rp-mo-ba4-br100',
  },
  {
    id: 3,
    rating: 5,
    content: `
    <p>Endroit intimiste. Service rapide. Juste la bonne quantité, pas de gaspillage. Excellente cuisine. Gentillesse et humour des patrons. Un vrai bon moment dans le 17eme.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Judith Jassogne',
    avatarSrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu-82zasmUQSI1-ZTly7R2md5OtTFkP3P8QndcanbuA=w120-h120-p-rp-mo-br100'
  },{
    id: 4,
    rating: 5,
    content: `
      <p>Très bien, pâte fine, huile super piquante comme j'aime</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Fanny de Worm',
    avatarSrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu_waDM7pAjIFCYzzskGFl8b3UESKyi-S1ObU3Nj=w120-h120-p-rp-mo-ba3-br100',
  },{
    id: 5,
    rating: 5,
    content: `
      <p>Great staff, very kind! Great italian food for a good price. Good portions as well. one of the best italian restaurants we ate!</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Amy',
    avatarSrc:
      'https://lh3.googleusercontent.com/a-/ACNPEu8TH016-KCu7Uv-Ak7bwx9unHsRPNHnoVU6xEgZTQ=w120-h120-p-rp-mo-br100',
  },// More reviews...
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  return (
    <div className="pb-20 px-20">
      <div>
        <h2 className="flex justify-center items-center text-4xl lg:text-5xl font-bold py-20 text-yellow-400">Ils ont aimés</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-900" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-700', 'flex-1 py-10')}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className=" text-gray-500 mt-4 max-w-none "
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

