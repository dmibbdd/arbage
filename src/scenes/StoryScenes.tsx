import ActionButton from "../components/ActionButton"
import {
  BloomingFlower,
  Bouquet,
  FlowerCharacter,
} from "../components/FlowerIllustrations"

type SceneActionProps = {
  disabled: boolean
}

export function InvitationScene({
  onNext,
  disabled,
}: SceneActionProps & { onNext: () => void }) {
  return (
    <section
      className="story-scene story-scene--invitation"
      aria-labelledby="scene-one-title"
    >
      <div className="eyebrow">
        <span />
        یه چیز کوچولو منتظرته
        <span />
      </div>
      <div className="paper-card invitation-card">
        <span className="card-flower card-flower--one" aria-hidden="true">
          ✿
        </span>
        <span className="card-flower card-flower--two" aria-hidden="true">
          ❀
        </span>
        <p className="scene-number">۰۱</p>
        <h1 id="scene-one-title">
          یه سورپرایز کوچولو برات دارم! <span>🌷</span>
        </h1>
        <p className="scene-copy">ولی اول باید یه کاری انجام بدی...</p>
        <ActionButton onClick={onNext} disabled={disabled}>
          کلیک کن اینجا 👀
        </ActionButton>
        <p className="tiny-note">نگران نباش، ویروسی نیست 😂</p>
      </div>
    </section>
  )
}

export function MischiefScene({
  onNext,
  disabled,
  reaction,
}: SceneActionProps & { onNext: () => void; reaction: boolean }) {
  return (
    <section
      className="story-scene story-scene--mischief"
      aria-labelledby="scene-two-title"
    >
      <div className="mischief-mark" aria-hidden="true">
        !
      </div>
      <p className="scene-number">۰۲ / اوه اوه...</p>
      <h1 id="scene-two-title">
        اِ اِ اِ! <span>😐</span>
      </h1>
      <p className="scene-copy">گفتم کلیک نکن‌ها! چرا انقدر کنجکاوی؟ 😂</p>
      <div className="danger-zone">
        <span className="scribble" aria-hidden="true" />
        <ActionButton
          className="tempting-button"
          variant="soft"
          onClick={onNext}
          disabled={disabled}
        >
          اصلاً به این دکمه دست نزن! 🚫
        </ActionButton>
      </div>
      <p
        className={`reaction-text ${reaction ? "is-visible" : ""}`}
        role="status"
      >
        باز هم کلیک کردی؟! خب... خودت خواستی 😌
      </p>
    </section>
  )
}

export function FlowerScene({
  started,
  ready,
  disabled,
  onBloom,
  onNext,
}: SceneActionProps & {
  started: boolean
  ready: boolean
  onBloom: () => void
  onNext: () => void
}) {
  return (
    <section
      className="story-scene story-scene--flower"
      aria-labelledby="scene-three-title"
    >
      <div className={`flower-intro ${started ? "flower-intro--compact" : ""}`}>
        <p className="scene-number">۰۳ / هدیهٔ اصلی</p>
        <h1 id="scene-three-title">حالا که تا اینجا اومدی...</h1>
        <p className="scene-copy">بیا، این گل برای توئه! 🌷</p>
      </div>
      <div className="flower-visual-wrap">
        <BloomingFlower started={started} />
      </div>
      {!started && (
        <ActionButton onClick={onBloom} disabled={disabled}>
          گلمو می‌گیرم! 🌸
        </ActionButton>
      )}
      <div
        className={`flower-message ${ready ? "is-visible" : ""}`}
        aria-live="polite"
      >
        <p>یه گل کوچولو برای یه دوست دوست‌داشتنی 🌷</p>
        <ActionButton
          onClick={onNext}
          disabled={!ready || disabled}
          variant="outline"
        >
          خب، بعدش چی؟ 👀
        </ActionButton>
      </div>
    </section>
  )
}

export function RevealScene({
  onNext,
  disabled,
}: SceneActionProps & { onNext: () => void }) {
  return (
    <section
      className="story-scene story-scene--reveal"
      aria-labelledby="scene-four-title"
    >
      <div className="character-wrap">
        <span className="character-bubble">دیدی گفتم!</span>
        <FlowerCharacter />
      </div>
      <div className="reveal-copy">
        <p className="scene-number">۰۴ / اعتراف آخر</p>
        <h1 id="scene-four-title">می‌دونستم بالاخره کلیک می‌کنی! 😂</h1>
        <p className="scene-copy">
          از اول هم معلوم بود نمی‌تونی جلوی کنجکاویتو بگیری!
        </p>
        <ActionButton onClick={onNext} disabled={disabled}>
          باشه بابا، تبریکمو بگو! 😑
        </ActionButton>
      </div>
    </section>
  )
}

export function FinalScene({
  onReset,
  disabled,
}: SceneActionProps & { onReset: () => void }) {
  return (
    <section
      className="story-scene story-scene--final"
      aria-labelledby="scene-five-title"
    >
      <div className="final-card">
        <div className="final-illustration">
          <span className="final-spark final-spark--one" aria-hidden="true">
            ✦
          </span>
          <span className="final-spark final-spark--two" aria-hidden="true">
            ✧
          </span>
          <Bouquet />
        </div>
        <div className="final-copy">
          <p className="scene-number">۰۵ / و بالاخره...</p>
          <h1 id="scene-five-title">
            روز دختر مبارک! <span>🌷</span>
          </h1>
          <p className="final-message">
            امیدوارم همیشه دلت شاد باشه، لبخندت واقعی و روزات پر از اتفاقای
            قشنگ. همیشه بدرخشی و به چیزایی که دوست داری برسی. اینم یه گل کوچولو
            برای تو، چون می‌دونم گل‌ها رو خیلی دوست داری! 💐
          </p>
          <div className="friendship-seal">
            <span aria-hidden="true">✿</span>
            <p>برای یک رفیق دوست‌داشتنی و روزهای روشن پیشِ رو</p>
          </div>
          <p className="postscript">
            پ.ن: امیدوارم از این همه کلیک کردن خسته نشده باشی 😂
          </p>
          <ActionButton onClick={onReset} disabled={disabled} variant="outline">
            یه بار دیگه از اول؟ 🔄
          </ActionButton>
        </div>
      </div>
    </section>
  )
}
