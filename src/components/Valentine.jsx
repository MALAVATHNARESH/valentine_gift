import { useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import meetupImg from "../assets/meetup.jpeg";
import conversationImg from "../assets/phonecalls.jpeg";
import fightsImg from "../assets/fight.jpeg";
import distanceImg from "../assets/distance.png";
import memoryImg from "../assets/memory1.jpeg";
import poemImg from "../assets/mall.jpeg";
import letterImg from "../assets/conversation.jpeg";
import memory1 from "../assets/memory1.jpeg";
import memory2 from "../assets/memory2.jpeg";
import memory3 from "../assets/memory3.jpeg";
import memory4 from "../assets/memory4.jpeg";
import memory5 from "../assets/memory5.jpeg";
import memory6 from "../assets/memories6.jpeg";

const CONTENT = {
    name: "Her",
    introTitle: "A Valentine Timeline",
    introBody:
        "This is a small timeline of us. Not perfect. Not polished. Just honest memories that still feel warm.",
    introCta: "Start the story",
    pages: {
        meetup: {
            time: "First meetup",
            dateTime: "Nov 22, 2026 •  10.30 AM",
            location: "Cinepolis DSL Virtue Mall,Uppal, Hyderabad",
            title: " The most memorable Day in my Life",
            body:
                "That day changed everything. I felt like I was finally seen you.I never felt happy like that before.",
            image: meetupImg
        },
        conversation: {
            time: "First conversation",
            dateTime: "14 Sep, 2025 • 3:20 PM",
            title: "The Phone call",
            body:
                "The first time we spoke, I felt like I was finally heard. The words felt simple, the kind that do not need rehearsing.",
            image: conversationImg
        },
        fights: {
            time: "Small fights",
            title: "The tough parts",
            body:
                "I always behaved so stupid with you Im extermely sorry for everthing i never want to loose you.",
            image: fightsImg
        },
        distance: {
            time: "Now",
            title: "No more connection",
            body:
                "The silence is loud. The distance is real. I miss what we had.\n\nI cried a lot about you and our memories. I never imagined that this day would come. I don’t know how to fix this, but I want to try again. I need you.\n\nI’m completely broken. I think about you every second. I explain everything so you can understand my pain, but you never listen to me. I know I made a lot of mistakes, but please give me one more chance to prove myself.\n\nI think this is the end for me.",
            image: distanceImg
        },
        poem: {
            title: "My poem for you",
            body:
                "My heart turned toward you\nwithout asking permission,\nwithout knowing how it would end.\n\nI carry your name in my silence,\nyour face in my quiet moments,\nyour presence in every breath I take.\n\nEven if you never walk beside me,\nI will still walk with the feeling of you,\nholding this attachment like a fragile dream\nthat only my heart understands.\n\nEven when broken, my heart will remember\nthe place where it once felt closest to you.",
            image: poemImg
        },
        letter: {
            title: "A letter",
            body:
                "Dear Lavanya ❤️ ,\n\nI want to say sorry for everything i did . I think Sorry is a smallest word i ruined everything your happiness , peace..\n\nPlease Forgiveme 🙏🙏🙏..\n\nDate : 3/02/2026 , Tuesday\n\nninu marchipoleka edvani roju ledhu prathi nimisham edchanu niku telusu ani nenu feel indhi chepina but wont listened lite thisunav epudu premanently velipotuna dhurangaa be happy lavanya inka badha petanu ninu sorry nilife loki vachi thapu chesanu ni lanti manchi ammai life spoil chesanu inka nuvu try chesina nuvu contact avalev okati chepina ni presence can fix everthing but niku undali kadha enthala badha paduthundu em cheyaley vadi kosam ela undey vadu elaa iypoyadu ani ... but ala ani ninu force cheyadam correct kadhu na valla ina problems challu inka niku nenu problem la maradhuu andukey velipothuna ani vadileysi shylu ki chepin challu amey kuda ardam chesko ledhu na badha thapu nadhey sorry nvu happy ga undali ekkada unna apudu navuthu undali finally my chapter ends here. chala kavali anukuna ninu sorry aa porcess lo m chesanoo ardam kaledhu sorry ninu ebbandhi petinanduku But nikosam badha padeyallu undachu na valla edchey vallu undaru na care chesey vallu undaru nuvu edisthey edchey vallu undaru nuvu nanu forgive chesina roju nenu niku kavali anukuna roju nenu ostha appat dhaka nenu bathiki untey aa account use cheyadaniki try chestha naku phone ledu but try chestha login kadaniki ni kosam chaala badesthey bathakanu inkaa..\n\nMy heart leaned toward yours\nwithout asking for permission,\nwithout knowing the ending.\n\nI carry your name in my silence,\nyour face in every quiet moment,\nyour presence in every breath I take.\n\nIf you never walk beside me,\nI will still walk with the feeling of you,\nholding this attachment like a fragile dream\nthat only my heart understands.\n\nEven broken, my heart will remember\nwhere it once felt closest to you.",
            image: letterImg
        },
        memories: {
            title: "Our memories",
            body:
                "Those are the happiest days in my life. Ee 22 years life lo nitho spend chesina days chala happy ga undey.Thank you ...",
            images: [
                { src: memory1, label: "Memory 1" },
                { src: memory2, label: "Memory 2" },
                { src: memory3, label: "Memory 3" },
                { src: memory4, label: "Memory 4" },
                { src: memory5, label: "Memory 5" },
                { src: memory6, label: "Memory 6" }
            ]
        }
    },
    questions: {
        like: {
            title: "A small, honest question",
            question: "Do you like me?",
            yes: "Yes",
            no: "No",
            yesResponse: "That means a lot. Thank you for being honest.",
            noResponse: "I understand. Thank you for being honest with me."
        },
        apology: {
            title: "An apology",
            question: "Can you forgive me for the fights and the mess?",
            yes: "I forgive you",
            no: "Not yet",
            yesResponse: "Thank you. I will do better and be kinder.",
            noResponse: "I hear you. I will be patient and give you space."
        }
    },
    closing: {
        title: "Whatever you choose",
        body:
            "Thank you for reading this. I hope the story made you smile, even a little."
    },
    valentineEffect: {
        message: "My heart is full. Thank you for choosing Me But its too late Im no more alive.",
        subMessage: "You just made my day Feeling Happy."
    }
};

const steps = [
    {
        id: "intro",
        type: "intro",
        title: CONTENT.introTitle,
        body: CONTENT.introBody,
        cta: CONTENT.introCta
    },
    {
        id: "meetup",
        type: "moment",
        time: CONTENT.pages.meetup.time,
        dateTime: CONTENT.pages.meetup.dateTime,
        location: CONTENT.pages.meetup.location,
        title: CONTENT.pages.meetup.title,
        body: CONTENT.pages.meetup.body,
        image: CONTENT.pages.meetup.image
    },
    {
        id: "conversation",
        type: "moment",
        time: CONTENT.pages.conversation.time,
        dateTime: CONTENT.pages.conversation.dateTime,
        location: CONTENT.pages.conversation.location,
        title: CONTENT.pages.conversation.title,
        body: CONTENT.pages.conversation.body,
        image: CONTENT.pages.conversation.image
    },
    {
        id: "fights",
        type: "moment",
        time: CONTENT.pages.fights.time,
        title: CONTENT.pages.fights.title,
        body: CONTENT.pages.fights.body,
        image: CONTENT.pages.fights.image
    },
    {
        id: "distance",
        type: "moment",
        time: CONTENT.pages.distance.time,
        title: CONTENT.pages.distance.title,
        body: CONTENT.pages.distance.body,
        image: CONTENT.pages.distance.image
    },
    {
        id: "poem",
        type: "poem",
        title: CONTENT.pages.poem.title,
        body: CONTENT.pages.poem.body,
        image: CONTENT.pages.poem.image
    },
    {
        id: "letter",
        type: "letter",
        title: CONTENT.pages.letter.title,
        body: CONTENT.pages.letter.body,
        image: CONTENT.pages.letter.image
    },
    {
        id: "memories",
        type: "gallery",
        title: CONTENT.pages.memories.title,
        body: CONTENT.pages.memories.body,
        images: CONTENT.pages.memories.images
    },
    {
        id: "like",
        type: "question",
        title: CONTENT.questions.like.title,
        question: CONTENT.questions.like.question,
        yes: CONTENT.questions.like.yes,
        no: CONTENT.questions.like.no,
        yesResponse: CONTENT.questions.like.yesResponse,
        noResponse: CONTENT.questions.like.noResponse
    },
    {
        id: "apology",
        type: "question",
        title: CONTENT.questions.apology.title,
        question: CONTENT.questions.apology.question,
        yes: CONTENT.questions.apology.yes,
        no: CONTENT.questions.apology.no,
        yesResponse: CONTENT.questions.apology.yesResponse,
        noResponse: CONTENT.questions.apology.noResponse
    },
    {
        id: "valentine",
        type: "valentine",
        title: "Will you be my Valentine?",
        yes: "Yes",
        no: "No"
    }
];

const colorThemes = {
    blush: {
        name: "Blush",
        bg: "from-rose-100 via-amber-50 to-rose-200",
        accent: "bg-rose-500",
        soft: "bg-rose-100"
    },
    cocoa: {
        name: "Cocoa",
        bg: "from-amber-100 via-rose-200 to-rose-300",
        accent: "bg-amber-700",
        soft: "bg-amber-100"
    }
};

function FloatingPetals() {
    const petals = useMemo(
        () =>
            Array.from({ length: 18 }).map(() => ({
                left: Math.random() * 100,
                size: 10 + Math.random() * 18,
                delay: Math.random() * 6,
                duration: 12 + Math.random() * 10
            })),
        []
    );

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {petals.map((p, i) => (
                <span
                    key={i}
                    className="petal animate-drift"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`
                    }}
                />
            ))}
        </div>
    );
}

function MomentCard({ time, dateTime, location, title, body, image }) {
    return (
        <div className="moment-grid">
            <div>
                <div className="moment-meta">
                    <p className="text-xs uppercase tracking-[0.3em] text-rose-600/70">
                        {time}
                    </p>
                    {(dateTime || location) && (
                        <div className="mt-2 space-y-1 text-sm text-rose-700/80">
                            {dateTime && (
                                <div className="moment-meta-row">
                                    <span className="moment-icon" aria-hidden="true">🗓️</span>
                                    <span>{dateTime}</span>
                                </div>
                            )}
                            {location && (
                                <div className="moment-meta-row">
                                    <span className="moment-icon" aria-hidden="true">📍</span>
                                    <span>{location}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-stone-900">
                    {title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                    {body}
                </p>
            </div>
            <div className="image-card">
                <img src={image} alt={title} />
            </div>
        </div>
    );
}

function StoryCard({ label, title, body, image }) {
    return (
        <div className="story-panel">
            <p className="uppercase tracking-[0.35em] text-[11px] text-rose-700/70">
                {label}
            </p>
            <div className="moment-grid">
                <div>
                    <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-stone-900">
                        {title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-stone-700 whitespace-pre-line">
                        {body}
                    </p>
                </div>
                {image && (
                    <div className="image-card">
                        <img src={image} alt={title} />
                    </div>
                )}
            </div>
        </div>
    );
}

function FlowerScene() {
    const sceneRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            sceneRef.current?.classList.remove("not-loaded");
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={sceneRef} className="flower-scene not-loaded" aria-hidden="true">
            <div className="night"></div>
            <div className="flowers">
                <div className="flower flower--1">
                    <div className="flower__leafs flower__leafs--1">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                        <div className="flower__line__leaf flower__line__leaf--5"></div>
                        <div className="flower__line__leaf flower__line__leaf--6"></div>
                    </div>
                </div>

                <div className="flower flower--2">
                    <div className="flower__leafs flower__leafs--2">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                </div>

                <div className="flower flower--3">
                    <div className="flower__leafs flower__leafs--3">
                        <div className="flower__leaf flower__leaf--1"></div>
                        <div className="flower__leaf flower__leaf--2"></div>
                        <div className="flower__leaf flower__leaf--3"></div>
                        <div className="flower__leaf flower__leaf--4"></div>
                        <div className="flower__white-circle"></div>

                        <div className="flower__light flower__light--1"></div>
                        <div className="flower__light flower__light--2"></div>
                        <div className="flower__light flower__light--3"></div>
                        <div className="flower__light flower__light--4"></div>
                        <div className="flower__light flower__light--5"></div>
                        <div className="flower__light flower__light--6"></div>
                        <div className="flower__light flower__light--7"></div>
                        <div className="flower__light flower__light--8"></div>
                    </div>
                    <div className="flower__line">
                        <div className="flower__line__leaf flower__line__leaf--1"></div>
                        <div className="flower__line__leaf flower__line__leaf--2"></div>
                        <div className="flower__line__leaf flower__line__leaf--3"></div>
                        <div className="flower__line__leaf flower__line__leaf--4"></div>
                    </div>
                </div>

                <div className="grow-ans" style={{ "--d": "1.2s" }}>
                    <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                    </div>
                </div>

                <div className="growing-grass">
                    <div className="flower__grass flower__grass--1">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                    </div>
                </div>

                <div className="growing-grass">
                    <div className="flower__grass flower__grass--2">
                        <div className="flower__grass--top"></div>
                        <div className="flower__grass--bottom"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                        <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                        <div className="flower__grass__overlay"></div>
                    </div>
                </div>

                <div className="grow-ans" style={{ "--d": "2.4s" }}>
                    <div className="flower__g-right flower__g-right--1">
                        <div className="leaf"></div>
                    </div>
                </div>

                <div className="grow-ans" style={{ "--d": "2.8s" }}>
                    <div className="flower__g-right flower__g-right--2">
                        <div className="leaf"></div>
                    </div>
                </div>

                <div className="grow-ans" style={{ "--d": "2.8s" }}>
                    <div className="flower__g-front">
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                            <div className="flower__g-front__leaf"></div>
                        </div>
                        <div className="flower__g-front__line"></div>
                    </div>
                </div>

                <div className="grow-ans" style={{ "--d": "3.2s" }}>
                    <div className="flower__g-fr">
                        <div className="leaf"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                        <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                    </div>
                </div>

                <div className="long-g long-g--0">
                    <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "2.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.4s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--1">
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.8s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--2">
                    <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--3">
                    <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--4">
                    <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--5">
                    <div className="grow-ans" style={{ "--d": "4s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--6">
                    <div className="grow-ans" style={{ "--d": "4.2s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.4s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.6s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "4.8s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>

                <div className="long-g long-g--7">
                    <div className="grow-ans" style={{ "--d": "3s" }}>
                        <div className="leaf leaf--0"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.2s" }}>
                        <div className="leaf leaf--1"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.5s" }}>
                        <div className="leaf leaf--2"></div>
                    </div>
                    <div className="grow-ans" style={{ "--d": "3.6s" }}>
                        <div className="leaf leaf--3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HeartConfettiOverlay({ message, subMessage, onClose }) {
    const canvasRef = useRef(null);
    const [active, setActive] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const confettiInstance = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });

        const heart =
            typeof confetti.shapeFromText === "function"
                ? confetti.shapeFromText({ text: "❤", scalar: 1.2 })
                : "circle";

        const launch = (count = 2) => {
            confettiInstance({
                particleCount: 80,
                spread: 70,
                startVelocity: 35,
                origin: { x: 0.5, y: 0.55 },
                colors: ["#fb7185", "#f43f5e", "#fda4af", "#f472b6"],
                shapes: [heart],
                scalar: 1.1,
                ticks: 240
            });

            for (let i = 0; i < count; i++) {
                confettiInstance({
                    particleCount: 30,
                    spread: 90,
                    startVelocity: 25,
                    origin: { x: 0.25 + i * 0.25, y: 0.6 },
                    colors: ["#fb7185", "#f43f5e", "#fda4af"],
                    shapes: [heart],
                    scalar: 0.9,
                    ticks: 220
                });
            }
        };

        launch(3);
        const interval = setInterval(() => launch(2), 1100);
        const timeout = setTimeout(() => {
            setActive(false);
            onClose?.();
        }, 5200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            confettiInstance.reset();
        };
    }, [onClose]);

    if (!active) return null;

    return (
        <div className="heart-overlay" onClick={onClose}>
            <canvas ref={canvasRef} className="heart-canvas" />
            <div className="heart-message">
                <p className="heart-title">{message}</p>
                <p className="heart-subtitle">{subMessage}</p>
                <p className="heart-hint">Tap anywhere to continue</p>
            </div>
        </div>
    );
}

function HeartBurstOverlay({ message, subMessage, onClose }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const confettiInstance = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });

        const heartShape =
            typeof confetti.shapeFromText === "function"
                ? confetti.shapeFromText({ text: "❤", scalar: 1.2 })
                : "circle";

        const blast = () => {
            confettiInstance({
                particleCount: 220,
                spread: 140,
                startVelocity: 65,
                gravity: 0.6,
                ticks: 280,
                origin: { x: 0.5, y: 0.55 },
                colors: ["#fb7185", "#f43f5e", "#fda4af", "#f472b6"],
                shapes: [heartShape],
                scalar: 1.2
            });
            confettiInstance({
                particleCount: 140,
                spread: 120,
                startVelocity: 55,
                gravity: 0.7,
                ticks: 260,
                origin: { x: 0.25, y: 0.6 },
                colors: ["#fb7185", "#fda4af", "#f472b6"],
                shapes: [heartShape],
                scalar: 1
            });
            confettiInstance({
                particleCount: 140,
                spread: 120,
                startVelocity: 55,
                gravity: 0.7,
                ticks: 260,
                origin: { x: 0.75, y: 0.6 },
                colors: ["#fb7185", "#fda4af", "#f472b6"],
                shapes: [heartShape],
                scalar: 1
            });
        };

        blast();
        const interval = setInterval(blast, 900);
        const timeout = setTimeout(() => {
            clearInterval(interval);
            onClose?.();
        }, 4200);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            confettiInstance.reset();
        };
    }, [onClose]);

    return (
        <div className="heart-overlay">
            <canvas ref={canvasRef} className="heart-canvas" />
            <div className="heart-message">
                <p className="heart-title">{message}</p>
                <p className="heart-subtitle">{subMessage}</p>
                <button type="button" className="heart-close" onClick={onClose}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default function Valentine() {
    const [theme, setTheme] = useState("blush");
    const [stepIndex, setStepIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [reaction, setReaction] = useState(null);
    const [noStage, setNoStage] = useState(0);
    const [noMessagePos, setNoMessagePos] = useState({ left: "50%", top: "65%" });
    const [showHeartEffect, setShowHeartEffect] = useState(false);
    const boxRef = useRef(null);
    const noBtnRef = useRef(null);
    const zoneRef = useRef(null);

    const totalSteps = steps.length;
    const step = steps[stepIndex];
    const isFirst = stepIndex === 0;
    const isLast = stepIndex === totalSteps - 1;
    const needsAnswer = step.type === "question";
    const hasAnswer = Boolean(responses[step.id]);

    const goNext = () => setStepIndex(i => Math.min(totalSteps - 1, i + 1));
    const goPrev = () => setStepIndex(i => Math.max(0, i - 1));

    const recordAnswer = (id, value, response) => {
        setResponses(prev => ({ ...prev, [id]: { value, response } }));
        setReaction(value === "yes" ? "yes" : "no");
        setTimeout(() => setReaction(null), 2800);
        if (value === "yes") {
            confetti({
                particleCount: 180,
                spread: 110,
                startVelocity: 45,
                origin: { x: 0.5, y: 0.5 }
            });
        }
    };

    const noMessages = [
        "Oops 💔",
        "Denied ❌",
        "Nope 😎",
        "Rejected 😭",
        "Fail 💔",
        "Bruh 💀",
        "Yikes 😬",
        "Pain 😭",
        "Ouch 💔"
    ];

    const handleValentineYes = () => {
        setShowHeartEffect(true);
    };

    const handleValentineNo = () => {
        setNoStage(s => (s + 1) % noMessages.length);
        const left = 10 + Math.random() * 70;
        const top = 20 + Math.random() * 60;
        setNoMessagePos({ left: `${left}%`, top: `${top}%` });
    };

    return (
        <div
            className={`min-h-screen bg-gradient-to-br ${colorThemes[theme].bg} text-stone-800 transition-colors duration-700`}
        >
            <FloatingPetals />
            <div className="romantic-glow" />
            <div className="romantic-orb orb-one" />
            <div className="romantic-orb orb-two" />
            <div className="romantic-orb orb-three" />
            <div className="fixed top-5 right-6 z-20 flex items-center gap-2">
                {Object.keys(colorThemes).map(t => (
                    <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`h-9 w-9 rounded-full border-2 transition-all duration-300 ${
                            theme === t ? "border-stone-800 scale-110" : "border-stone-800/30"
                        }`}
                        style={{
                            background:
                                t === "blush"
                                    ? "linear-gradient(135deg,#fb7185,#fbbf24)"
                                    : "linear-gradient(135deg,#b45309,#f59e0b)"
                        }}
                        aria-label={`Theme ${colorThemes[t].name}`}
                    />
                ))}
            </div>

            <div className="min-h-screen flex items-center justify-center px-6 py-12">
                <main
                    ref={boxRef}
                    className="relative z-10 w-full max-w-2xl rounded-[32px] bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(120,40,40,0.2)] p-8 md:p-12 border border-white/60 romantic-card"
                >
                    {reaction && (
                        <div className="reaction-burst" aria-hidden="true">
                            {reaction === "yes" ? (
                                <span className="reaction-emoji">😍</span>
                            ) : (
                                <span className="reaction-emoji">🥺</span>
                            )}
                        </div>
                    )}
                    <section key={step.id} className="animate-fade-up">
                        {showHeartEffect && (
                            <HeartBurstOverlay
                                message={CONTENT.valentineEffect.message}
                                subMessage={CONTENT.valentineEffect.subMessage}
                                onClose={() => setShowHeartEffect(false)}
                            />
                        )}
                        {step.type === "intro" && (
                            <>
                                <p className="uppercase tracking-[0.35em] text-[11px] text-rose-700/70">
                                    Valentine Note
                                </p>
                                <h1 className="mt-3 text-4xl md:text-5xl font-serif font-semibold text-stone-900">
                                    {step.title}
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-stone-700">
                                    {step.body}
                                </p>
                                <button
                                    onClick={goNext}
                                    className={`mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold tracking-wide ${colorThemes[theme].accent} hover:scale-[1.02] transition`}
                                >
                                    {step.cta}
                                </button>
                            </>
                        )}

                        {step.type === "moment" && (
                            <MomentCard
                                time={step.time}
                                dateTime={step.dateTime}
                                location={step.location}
                                title={step.title}
                                body={step.body}
                                image={step.image}
                            />
                        )}

                        {step.type === "story" && (
                            <>
                                <StoryCard
                                    label={step.id === "memory" ? "Memory" : "Story"}
                                    title={step.title}
                                    body={step.body}
                                    image={step.image}
                                />
                                {step.id === "memory" && step.images && (
                                    <div className="mt-8 memory-grid">
                                        {step.images.map((img, index) => (
                                            <div key={`${img.label}-${index}`} className="memory-card">
                                                <div className="memory-placeholder">
                                                    <span>{img.label}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}

                        {step.type === "poem" && (
                            <StoryCard
                                label="Poem"
                                title={step.title}
                                body={step.body}
                                image={step.image}
                            />
                        )}

                        {step.type === "letter" && (
                            <StoryCard
                                label="Letter"
                                title={step.title}
                                body={step.body}
                                image={step.image}
                            />
                        )}

                        {step.type === "gallery" && (
                            <div className="story-panel">
                                <p className="uppercase tracking-[0.35em] text-[11px] text-rose-700/70">
                                    Memories
                                </p>
                                <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-stone-900">
                                    {step.title}
                                </h2>
                                <p className="mt-5 text-lg leading-relaxed text-stone-700">
                                    {step.body}
                                </p>
                                <div className="mt-8 memory-grid">
                                    {step.images.map((img, index) => (
                                        <div key={`${img.label}-${index}`} className="memory-card">
                                            {img.src ? (
                                                <img
                                                    src={img.src}
                                                    alt={img.label}
                                                    className="memory-photo"
                                                />
                                            ) : (
                                                <div className="memory-placeholder">
                                                    <span>{img.label}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step.type === "question" && (
                            <div className="question-panel">
                                <p className="uppercase tracking-[0.35em] text-[11px] text-rose-700/70">
                                    Question
                                </p>
                                <h2 className="mt-3 text-3xl md:text-4xl font-serif font-semibold text-stone-900">
                                    {step.title}
                                </h2>
                                <p className="mt-5 text-xl text-stone-700">{step.question}</p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <button
                                        onClick={() =>
                                            recordAnswer(step.id, "yes", step.yesResponse)
                                        }
                                        className={`px-6 py-3 rounded-full text-white font-semibold shadow-md transition ${colorThemes[theme].accent}`}
                                    >
                                        {step.yes}
                                    </button>
                                    <button
                                        onClick={() =>
                                            recordAnswer(step.id, "no", step.noResponse)
                                        }
                                        className="px-6 py-3 rounded-full bg-stone-100 text-stone-700 font-semibold shadow-md hover:bg-stone-200 transition"
                                    >
                                        {step.no}
                                    </button>
                                </div>

                                {responses[step.id] && (
                                    <div className="mt-6 rounded-2xl bg-rose-50 px-5 py-4 text-stone-700 animate-fade-up">
                                        {responses[step.id].response}
                                    </div>
                                )}
                            </div>
                        )}

                        {step.type === "valentine" && (
                            <div className="question-panel valentine-panel">
                                <div className="valentine-flower-layer">
                                    <FlowerScene />
                                </div>
                                <div className="valentine-content">
                                <p className="uppercase tracking-[0.35em] text-[11px] text-rose-700/70">
                                    Valentine
                                </p>
                                <h2 className="mt-3 text-3xl md:text-5xl font-serif font-semibold text-stone-900">
                                    {step.title}
                                </h2>
                                <p className="mt-4 text-lg text-stone-700 valentine-message">
                                    You are important to me in ways I cannot fully explain.
                                    You are the calm, the spark, and the person I keep choosing
                                    in my heart.
                                </p>

                                <div ref={zoneRef} className="valentine-zone">
                                    <button
                                        type="button"
                                        onClick={handleValentineYes}
                                        className={`valentine-yes ${colorThemes[theme].accent}`}
                                    >
                                        {step.yes}
                                    </button>

                                    <button
                                        ref={noBtnRef}
                                        type="button"
                                        onClick={handleValentineNo}
                                        className="valentine-no"
                                    >
                                        {step.no}
                                    </button>
                                </div>
                                {noStage > 0 && (
                                    <div
                                        className="no-message-single"
                                        style={{ left: noMessagePos.left, top: noMessagePos.top }}
                                    >
                                        {noMessages[noStage]}
                                    </div>
                                )}
                                </div>
                            </div>
                        )}
                    </section>

                    <div className="mt-10 flex items-center justify-between">
                        <button
                            onClick={goPrev}
                            disabled={isFirst}
                            className="px-5 py-2 rounded-full border border-stone-300 text-stone-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-stone-500 transition"
                        >
                            Back
                        </button>
                        {!isLast && step.type !== "intro" && step.type !== "valentine" && (
                            <button
                                onClick={goNext}
                                disabled={needsAnswer && !hasAnswer}
                                className={`px-6 py-2 rounded-full text-white font-semibold ${colorThemes[theme].accent} hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                Next
                            </button>
                        )}
                        {step.type === "intro" && (
                            <button
                                onClick={goNext}
                                className={`px-6 py-2 rounded-full text-white font-semibold ${colorThemes[theme].accent} hover:scale-[1.02] transition`}
                            >
                                Continue
                            </button>
                        )}
                        {isLast && (
                            <div className="text-xs uppercase tracking-[0.3em] text-rose-600/70">
                                The end
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

