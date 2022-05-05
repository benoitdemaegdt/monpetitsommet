<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div
        class="relative h-full text-lg max-w-prose mx-auto"
        aria-hidden="true"
      >
        <svg
          class="absolute top-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
          />
        </svg>
        <svg
          class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute bottom-12 left-full transform translate-x-32"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
          />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span
            class="block text-base text-center text-emerald-600 font-semibold tracking-wide uppercase"
            >cabane non gardée</span
          >
          <span
            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >Cabane PNRV des Chaumailloux
          </span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">
          Difficile de ne pas tomber sous le charme de la cabane des
          Chaumailloux et de sa vue splendide sur le Mont Aiguille. Il s'agit
          d'un simple abris hexagonal en bois (rénové au cours de l'automne
          2018) située à quelques dizaines de mètres au dessus du Pas de
          l'Aiguille (haut lieu de mémoire pour la résistance dans le massif du
          Vercors). Ne venez pas ici si vous en êtes en quête d'intimité : sa
          localisation, son superbe cadre et sa facilité d'accès depuis le
          hameau de la richardière attirent de nombreux randonneurs.
        </p>
      </div>
      <div class="mt-6 prose prose-emerald prose-lg text-gray-500 mx-auto">
        <img
          class="w-full rounded-lg"
          src="https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018146/vercors/cabane-pnrv-des-chaumailloux-1_ujyt32.jpg"
          alt="cabane de Pré Peyret"
          width="1310"
          height="873"
        />
        <h2>Localisation</h2>
        <RefugeStats :refuge="refuge" />
        <ClientOnly>
          <RefugeMap class="mt-8 rounded-lg shadow" />
        </ClientOnly>
        <h2>Équipements</h2>
        <p>
          Il y a deux sources qui coulent (même en plein été !) à proximité de
          la cabane des chaumailloux. La première est située quelques mètres en
          contrebas, au ras du sol (sous la neige en hiver). Pour trouver la
          deuxième, il faut descendre vers le chalet visible en contrebas, puis
          prendre complètement à droite vers le ruisseau. Un tuyau a été
          installé pour permettre de remplir les gourdes.
        </p>
        <h2>Accès</h2>
        <h3>Depuis la Richardière</h3>
        <p>
          C'est l'itinéraire le plus simple (et donc le plus emprunté) pour
          rejoindre la cabane. Depuis le parking de la richardière, continuer
          tout droit vers le fond de la vallée. Le chemin est évident et bien
          indiqué pour monter vers le Pas de l'Aiguille. Il faut compter 1h30-2h
          et 450m de dénivelé.
        </p>
        <h3>Depuis la cabane de Pré Peyret</h3>
        <p>
          Depuis la cabane de Pré Peyret, il faut suivre le GR vers le sud puis
          tourner complètement à gauche au niveau du Col du Pison (matérialisé
          par 2 gros cairns). On suit alors les cairns qui nous emmènent
          directement à la cabane des chaumailloux. Attention, le sentier passe
          par la bergerie de jasneuf. Un berger et son troupeau et y résident
          pendant la saison estivale. Ne pas hésiter à contourner largement si
          les patous sont aggressifs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const refuge = {
  massif: 'Vercors',
  name: 'Cabane PNRV des chaumailloux',
  path: '/refuges/cabane-pnrv-des-chaumailloux',
  altitude: 1665,
  beds: 19,
  stove: true,
  water: true,
  type: 'cabane non gardée',
  frequentation: 'forte fréquentation',
  imageUrl:
    'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018146/vercors/cabane-pnrv-des-chaumailloux-1_ujyt32.jpg',
}

export default {
  setup() {
    return {
      refuge,
    }
  },
}
</script>
