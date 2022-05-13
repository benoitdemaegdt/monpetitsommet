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
            >Cabane de Pré Peyret
          </span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">
          Grâce à sa grande capacité d'accueil et sa position "à la croisée des
          chemins", la cabane de Pré Peyret est certainement l'une des cabanes
          les plus connues des Hauts Plateaux du Vercors. On y trouve toujours
          des randonneurs de passage pour une pause ou une nuit. La cabane en
          elle même est chaleureuse : présence d'un poêle pour les nuits
          froides, et d'un étage pour dormir.
        </p>
      </div>
      <div class="mt-6 prose prose-emerald prose-lg text-gray-500 mx-auto">
        <img
          class="w-full rounded-lg"
          src="https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018135/vercors/cabane-de-pre-peyret-hiver-1_b9munz.jpg"
          alt="cabane de Pré Peyret"
          width="1310"
          height="873"
        />
        <h2>Localisation</h2>
        <RefugeStats :refuge="refuge" />
        <client-only>
          <RefugeMap class="mt-8 rounded-lg shadow" />
        </client-only>
        <h2>Équipements</h2>
        <RefugeEquipment :refuge="refuge" />
        <p>
          La source d'eau la plus proche, la Fontaine des Endettés, se situe à
          quelques mètres au sud de la cabane. Attention, la source à tendance à
          se tarir au milieu de l'été. Comme pour toutes les sources d'eau du
          Vercors, bien vérifier le débit avant de commencer sa randonnée.
        </p>
        <h2>Accès</h2>
        <h3>Depuis le Col du Rousset</h3>
        <p>
          C'est probablement l'accès le plus facile et le moins fatiguant. En
          deux heures, on peut rejoindre la cabane de Pré Peyret depuis la
          station du Col du Rousset en suivant les crêtes. Chemin très facile
          présentant peu de dénivelé.
        </p>
        <h3>Depuis Corrençon-en-Vercors</h3>
        <p>
          Il faudra une faire une grosse journée de marche et une bonne partie
          de la Grande Traversée du Vercors pour rejoindre la cabane de Pré
          Peyret depuis Corrençon-en-Vercors.
        </p>
        <h3>Depuis le Pas de l'Aiguille</h3>
        <p>
          Le plus simple est d'aller à la bergerie de Jasneuf (chemin peu tracé,
          mais avec des cairns) avant de rejoindre le GR au niveau du col du
          Pison. On remonte alors au Nord (sans descendre des Hauts Plateaux)
          pour rejoindre la cabane en question. Il faut compter environ deux
          heures de marche.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const refuge = {
  massif: 'Vercors',
  name: 'Cabane de Pré peyret',
  path: '/refuges/cabane-de-pre-peyret',
  altitude: 1600,
  beds: 15,
  stove: true,
  water: true,
  toilets: false,
  wood: true,
  stove: true,
  matresses: 0,
  blankets: false,
  type: 'cabane non gardée',
  frequentation: 'forte fréquentation',
  imageUrl:
    'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018135/vercors/cabane-de-pre-peyret-hiver-1_b9munz.jpg',
}

export default {
  setup() {
    return {
      refuge,
    }
  },
}
</script>
