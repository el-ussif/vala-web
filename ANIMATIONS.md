# 🎬 Animations de la Landing Page Vala AI

## 📋 Vue d'ensemble

Cette landing page utilise **Framer Motion** pour créer une expérience utilisateur fluide et engageante avec des animations sophistiquées qui se déclenchent au scroll et à l'interaction.

## 🔧 Corrections TypeScript

### **Problème résolu :**
- ✅ Correction des types `Variants` pour éviter les erreurs de build
- ✅ Ajout de `as const` pour les arrays d'easing
- ✅ Import correct du type `Variants` de Framer Motion
- ✅ Configuration `once: false` pour permettre les animations répétées

### **Changements apportés :**
```typescript
// Avant (problématique)
const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94] // ❌ Type error
    }
  }
};

// Après (corrigé)
const variants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94] as const // ✅ Type safe
    }
  }
};
```

## 🛠️ Composants d'animation créés

### 1. **Hook useScrollAnimation** (`src/hooks/useScrollAnimation.ts`)
Hook personnalisé pour gérer les animations de scroll avec des variantes prédéfinies.

**Fonctionnalités :**
- Détection automatique de la visibilité des éléments
- Variantes d'animation prédéfinies (fadeInUp, fadeInDown, etc.)
- Configuration flexible des seuils et délais
- **Nouveau :** Animations répétées à chaque scroll (vers le haut et vers le bas)

**Variantes disponibles :**
- `fadeInUp` : Apparition depuis le bas
- `fadeInDown` : Apparition depuis le haut
- `fadeInLeft` : Apparition depuis la gauche
- `fadeInRight` : Apparition depuis la droite
- `scaleIn` : Apparition avec scale
- `staggerContainer` : Conteneur avec animations séquentielles
- `slideInFromBottom` : Glissement depuis le bas avec rotation
- `slideInFromTop` : Glissement depuis le haut avec rotation

### 2. **Hook useScrollAnimationAdvanced** (`src/hooks/useScrollAnimationAdvanced.ts`)
Hook avancé pour des animations directionnelles plus sophistiquées.

**Fonctionnalités :**
- Détection de la direction du scroll (haut/bas)
- Animations adaptées selon la direction
- Support pour les animations répétées
- Variants directionnels prédéfinis

### 3. **Hook useScrollDirection** (`src/hooks/useScrollDirection.ts`)
Hook pour détecter la direction du scroll.

**Retourne :**
- `'up'` : Scroll vers le haut
- `'down'` : Scroll vers le bas
- `null` : Pas de scroll

### 4. **ScrollProgress** (`src/components/ui/scroll-progress.tsx`)
Barre de progression animée en haut de la page qui suit le scroll.

**Caractéristiques :**
- Animation fluide avec spring physics
- Gradient de couleur cohérent avec le design
- Position fixe en haut de l'écran

### 5. **AnimatedText** (`src/components/ui/animated-text.tsx`)
Composant pour animer le texte avec différents effets.

**Types d'animation :**
- `word` : Animation mot par mot
- `character` : Animation caractère par caractère
- `line` : Animation de ligne complète

### 6. **ParallaxSection & ParallaxImage** (`src/components/ui/parallax-section.tsx`)
Composants pour créer des effets de parallaxe.

**Fonctionnalités :**
- Vitesse de parallaxe configurable
- Effets de scale sur les images
- Offsets personnalisables

## 🎯 Animations par section

### **HomeHeroes** (`src/components/home/home-heroes.tsx`)
- **Vidéo de fond** : Scale animé au chargement
- **Overlay** : Fade in progressif
- **Header** : Animation d'entrée depuis le haut
- **Contenu principal** : Animation séquentielle des éléments
- **Indicateur de scroll** : Animation continue avec bounce

### **MarketingBanner** (`src/components/home/marketing-banner.tsx`)
- **Image** : Fade in avec scale et hover effect
- **Texte** : Animation séquentielle des mots et badges
- **PillBadges** : Animation stagger avec scale
- **CTA Button** : Animation d'entrée avec hover effects

### **Features** (`src/components/home/features.tsx`)
- **Header** : Animation d'entrée depuis le bas
- **SectionHighlight** : Animation stagger des cartes
- **Contenu** : Animations séquentielles avec délais

### **SectionHighlight** (`src/components/home/section-highlight.tsx`)
- **Conteneur** : Hover effect avec scale
- **Texte** : Animation d'entrée depuis la gauche
- **Image** : Animation d'entrée depuis la droite avec hover

### **ExternalApps** (`src/components/home/external-apps.tsx`)
- **Header** : Animation d'entrée depuis le bas
- **Grille d'apps** : Animation stagger avec hover effects
- **Images** : Hover avec brightness et scale

### **UseCases** (`src/components/home/use-cases.tsx`)
- **Titre** : Animation d'entrée depuis le bas
- **Image** : Scale et hover effects
- **Texte** : Animations séquentielles
- **CTA** : Animation d'entrée avec hover

### **Footer** (`src/components/layout/footer.tsx`)
- **Conteneur** : Animation d'entrée depuis le bas
- **Logo** : Hover effect avec scale
- **Liens** : Animation stagger
- **SVG** : Scale effect

### **CallActionButton** (`src/components/home/call-action-button.tsx`)
- **Conteneur** : Hover et tap effects
- **Background** : Animation de gradient au hover
- **Shimmer** : Effet de brillance au hover

## 🎨 Effets d'animation utilisés

### **Transitions**
- **Easing** : `[0.25, 0.46, 0.45, 0.94]` (cubic-bezier personnalisé)
- **Durée** : 0.3s à 0.8s selon l'importance
- **Délais** : 0.1s à 0.4s pour les séquences

### **Hover Effects**
- **Scale** : 1.02 à 1.1 selon l'élément
- **Brightness** : Pour les images
- **Border color** : Pour les conteneurs
- **Background** : Gradients animés

### **Scroll Triggers**
- **Threshold** : 30% à 50% de visibilité
- **Once** : `false` pour permettre les répétitions
- **Amount** : Configuration de la sensibilité

## 🔄 Animations répétées

### **Nouvelle fonctionnalité :**
Les animations se déclenchent maintenant à chaque fois qu'un élément entre dans le viewport, que ce soit en scrollant vers le bas ou vers le haut.

**Configuration :**
```typescript
const { ref, isInView } = useScrollAnimation({ 
  once: false, // Permet les répétitions
  threshold: 150 
});
```

**Comportement :**
- ✅ Scroll vers le bas : Animation déclenchée
- ✅ Scroll vers le haut : Animation déclenchée
- ✅ Sortie du viewport : Élément revient à l'état initial
- ✅ Ré-entrée dans le viewport : Animation re-déclenchée

## 📱 Responsive Design

Toutes les animations sont optimisées pour :
- **Mobile** : Animations simplifiées pour les performances
- **Tablette** : Animations intermédiaires
- **Desktop** : Animations complètes avec tous les effets

## ⚡ Performance

### **Optimisations**
- Utilisation de `transform` et `opacity` pour les animations GPU
- `will-change` automatique via Framer Motion
- Animations répétées optimisées
- Lazy loading des animations avec `useInView`

### **Bonnes pratiques**
- Animations non-bloquantes
- Respect du `prefers-reduced-motion`
- Fallbacks pour les navigateurs non-supportés

## 🔧 Configuration

### **Variables d'environnement**
```env
# Désactiver les animations (optionnel)
NEXT_PUBLIC_DISABLE_ANIMATIONS=false
```

### **Personnalisation**
Les animations peuvent être facilement modifiées en ajustant :
- Les variantes dans `useScrollAnimation.ts`
- Les durées et délais dans chaque composant
- Les effets de hover dans les composants UI

## 🚀 Utilisation

### **Ajouter une animation simple**
```tsx
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';

const MyComponent = () => {
    const { ref, isInView } = useScrollAnimation({ once: false });
    
    return (
        <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            Contenu animé
        </motion.div>
    );
};
```

### **Animation avec direction**
```tsx
import { useScrollAnimationAdvanced, fadeInUpAdvanced } from '@/hooks/useScrollAnimationAdvanced';

const MyComponent = () => {
    const { ref, isInView } = useScrollAnimationAdvanced();
    
    return (
        <motion.div
            ref={ref}
            variants={fadeInUpAdvanced}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            Contenu avec animation directionnelle
        </motion.div>
    );
};
```

### **Animation de texte**
```tsx
import { AnimatedText } from '@/components/ui/animated-text';

<AnimatedText 
    text="Mon texte animé"
    type="word"
    delay={0.2}
    className="text-2xl"
/>
```

### **Effet parallaxe**
```tsx
import { ParallaxSection } from '@/components/ui/parallax-section';

<ParallaxSection speed={0.5}>
    Contenu avec effet parallaxe
</ParallaxSection>
```

## 🎯 Résultat final

La landing page offre maintenant une expérience utilisateur premium avec :
- ✅ Animations fluides et professionnelles
- ✅ Effets de scroll engageants dans les deux directions
- ✅ Interactions hover sophistiquées
- ✅ Performance optimisée
- ✅ Design responsive
- ✅ Accessibilité respectée
- ✅ Types TypeScript corrigés
- ✅ Animations répétées au scroll

Toutes les animations contribuent à créer une expérience immersive qui guide naturellement l'utilisateur à travers le contenu de la landing page, avec des animations qui se déclenchent à chaque interaction de scroll. 