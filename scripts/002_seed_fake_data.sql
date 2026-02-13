-- Seed fake data for the Lobe dashboard
-- Run this AFTER creating a user account via the app's sign-up flow.
-- Replace the user_id below with your actual auth.users id.

-- Step 1: Create a variable for the user (run after sign-up, replace with real id)
-- You can find your user id in the Supabase dashboard under Authentication > Users

DO $$
DECLARE
  uid uuid;
BEGIN
  -- Get the first user in the system (adjust if needed)
  SELECT id INTO uid FROM auth.users LIMIT 1;

  IF uid IS NULL THEN
    RAISE EXCEPTION 'No user found. Please sign up first, then re-run this script.';
  END IF;

  -- Insert dream 1: The Floating City
  INSERT INTO public.dreams (id, user_id, title, recorded_at, fragment, completed_dream, emotion, clarity_score, lucidity_score, tags)
  VALUES (
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    uid,
    'The Floating City',
    now() - interval '1 day',
    'I was walking through a city... but the buildings were in the sky. There were bridges made of glass. I could see the ground far below. Someone was calling my name but I couldn''t find them.',
    'You find yourself ascending a spiral staircase carved into a massive stone column that rises from the earth into a city suspended among the clouds. The buildings are luminous, built from pale stone and translucent crystal, connected by delicate glass bridges that catch the sunlight and scatter rainbows across the walkways. The air is cool and thin, carrying the faint sound of wind chimes and distant conversation. As you cross one of the bridges, you look down and see the ground thousands of feet below -- forests and rivers reduced to green and blue threads. The vertigo is exhilarating rather than frightening. Someone calls your name from a tower ahead, their voice warm and familiar. You walk toward it, passing through an open-air market where vendors sell bottles of captured clouds and pressed starlight. The voice grows clearer as you climb the tower stairs, and when you reach the top, you step onto a balcony overlooking the entire floating city, stretching to the horizon in every direction. The person who called you is standing there, but their face keeps shifting -- someone you know, someone you loved, someone you haven''t met yet. They smile and hand you a small glass sphere containing a miniature storm.',
    'Wonder',
    8,
    6,
    ARRAY['flying', 'architecture', 'heights', 'mystery']
  );

  -- Insert dream 2: The Ocean Library
  INSERT INTO public.dreams (id, user_id, title, recorded_at, fragment, completed_dream, emotion, clarity_score, lucidity_score, tags)
  VALUES (
    'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    uid,
    'The Ocean Library',
    now() - interval '3 days',
    'I was underwater but I could breathe. There were bookshelves everywhere, like a library at the bottom of the ocean. The books were glowing. A whale swam past the window.',
    'You are sitting at a reading desk in a vast underwater library. The walls are lined floor to ceiling with bookshelves made from dark coral, and every book emits a soft bioluminescent glow -- blues, greens, golds -- casting the entire space in shifting aquatic light. You can breathe normally, as if the water is air, though your hair drifts gently around your face and tiny bubbles rise from the pages when you turn them. The book in front of you contains stories that rewrite themselves as you read, the words rearranging into new narratives each time you look away and back. Through the enormous arched windows, you see the deep ocean stretching into darkness, punctuated by distant glowing creatures. A humpback whale glides past, impossibly close, its eye meeting yours for a long moment of mutual recognition. Schools of silver fish dart between the shelves like living bookmarks. A librarian made of shifting water approaches and places a new book on your desk -- this one doesn''t glow like the others. It pulses, like a heartbeat. When you open it, the pages are mirrors, reflecting not your face but scenes from your life you had forgotten: a childhood afternoon, a conversation that changed everything, a door you chose not to open.',
    'Peace',
    9,
    7,
    ARRAY['water', 'books', 'animals', 'memory']
  );

  -- Insert dream 3: The Train That Doesn't Stop
  INSERT INTO public.dreams (id, user_id, title, recorded_at, fragment, completed_dream, emotion, clarity_score, lucidity_score, tags)
  VALUES (
    'c3d4e5f6-a7b8-9012-cdef-123456789012',
    uid,
    'The Train That Doesn''t Stop',
    now() - interval '5 days',
    'I was on a train but it wouldn''t stop. The landscape outside kept changing -- desert, then snow, then a city at night. The other passengers were all reading the same book.',
    'You board a sleek silver train at a station with no name. The moment you step inside, the doors seal shut and the train accelerates smoothly. The interior is elegant -- polished wood, brass fixtures, deep velvet seats. Every other passenger is absorbed in the same leather-bound book, though the title is in a language you can''t read. You take your seat by the window and watch as the landscape transforms in impossible ways: rolling sand dunes under a copper sky give way in seconds to vast snow-covered mountains glittering under starlight, then to a neon-lit metropolis reflected in rain-slicked streets. Each transition is seamless, as if the world outside is a living painting being recomposed. You try to ask the passenger beside you where the train is going, but they only smile and turn another page. You notice the book in their hands contains illustrations that move -- tiny figures acting out scenes that mirror what you see outside. The train passes through a tunnel of pure darkness, and when it emerges, the landscape is your hometown, but subtly different: the colors are more vivid, the trees are taller, and there''s a second moon in the sky. The train shows no sign of stopping.',
    'Anxiety',
    7,
    4,
    ARRAY['travel', 'transformation', 'strangers', 'home']
  );

  -- Insert dream 4: The Garden of Clocks
  INSERT INTO public.dreams (id, user_id, title, recorded_at, fragment, completed_dream, emotion, clarity_score, lucidity_score, tags)
  VALUES (
    'd4e5f6a7-b8c9-0123-defa-234567890123',
    uid,
    'The Garden of Clocks',
    now() - interval '7 days',
    'There was a garden full of clocks instead of flowers. Each clock showed a different time. I could hear ticking everywhere. My grandmother was there, but she was young.',
    'You push open a wrought-iron gate and enter a garden unlike any you''ve seen. Instead of flowers, hundreds of clocks grow from the earth on slender stems -- grandfather clocks tower like trees, pocket watches bloom in clusters like daisies, and hourglasses hang from trellises like vines. Every clock shows a different time, and the collective ticking creates a rhythm that feels like breathing. The paths are made of crushed mirror glass that reflects the sky above, which shifts between day and night in patches, as if time itself is fractured here. You follow a path toward the center and find your grandmother sitting on a stone bench. She is young -- perhaps twenty -- with dark hair and bright eyes, wearing a dress you recognize from an old photograph. She looks up and smiles as if she''s been waiting. She''s tending a small clock-flower that hasn''t bloomed yet, carefully winding its stem. She tells you that every clock in the garden holds a moment -- not measures time, but contains it. She opens the face of the unblooomed clock and inside you hear a sound: your own laughter as a child, playing in her kitchen on a Sunday morning.',
    'Nostalgia',
    9,
    8,
    ARRAY['time', 'family', 'memory', 'garden']
  );

  -- Insert dream 5: The Mirror Maze
  INSERT INTO public.dreams (id, user_id, title, recorded_at, fragment, completed_dream, emotion, clarity_score, lucidity_score, tags)
  VALUES (
    'e5f6a7b8-c9d0-1234-efab-345678901234',
    uid,
    'The Mirror Maze',
    now() - interval '10 days',
    'I was lost in a maze of mirrors. My reflection didn''t match me -- it was doing different things. One reflection was laughing, another was crying. I kept trying to find the exit.',
    'You step into a hexagonal room made entirely of mirrors and realize you are at the entrance of an enormous maze. Your reflection stares back from every surface, but something is wrong -- the reflections don''t match your movements. The one to your left is laughing silently, head thrown back in joy. The one to your right is weeping, hands pressed against the glass. Ahead, a reflection of you sits cross-legged on the ground, meditating with closed eyes. You begin walking, choosing paths at random, and each turn reveals more versions of yourself: one is dancing, one is arguing with someone invisible, one is writing furiously in a journal, one is simply standing still and watching you with an expression of deep calm. The maze seems to grow as you move through it. Occasionally two reflections interact with each other, ignoring you entirely. You place your hand on one of the mirrors and it''s warm, almost alive. When you press harder, your hand sinks through, and the crying reflection grasps it and holds on. You feel a wave of emotion that isn''t yours -- a grief for something you can''t name. You pull your hand back and keep walking, until you round a corner and find a mirror that shows no reflection at all, just a door. Behind it: silence.',
    'Confusion',
    6,
    5,
    ARRAY['self', 'identity', 'maze', 'emotions']
  );

  -- Dream interpretations
  INSERT INTO public.interpretations (dream_id, user_id, summary, themes, symbols, mood_analysis) VALUES
  (
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890', uid,
    'This dream reflects aspiration and the desire to transcend ordinary limitations. The floating city represents idealized goals or an elevated state of consciousness you''re reaching toward. The glass bridges suggest transparency and vulnerability in your pursuit -- you can see both the beauty above and the risk below. The familiar voice calling you indicates a deep inner knowing guiding your journey, while the shifting face at the end suggests your relationship with identity is evolving.',
    ARRAY['aspiration', 'transcendence', 'vulnerability', 'identity'],
    '[{"symbol": "Floating city", "meaning": "Elevated ambitions or idealized future"}, {"symbol": "Glass bridges", "meaning": "Fragile connections and visible risk"}, {"symbol": "Shifting face", "meaning": "Evolving identity or unresolved relationships"}, {"symbol": "Storm in sphere", "meaning": "Contained emotional power"}]'::jsonb,
    'The dominant mood is wonder mixed with gentle yearning. There is an undercurrent of seeking -- reaching for something that remains just beyond full comprehension. The dream carries optimism despite its surreal elements.'
  ),
  (
    'b2c3d4e5-f6a7-8901-bcde-f12345678901', uid,
    'The underwater library symbolizes deep emotional knowledge and memories stored in your subconscious. Being able to breathe underwater indicates comfort with exploring your inner emotional landscape. The self-rewriting books suggest your understanding of past experiences is actively evolving. The whale represents deep wisdom and ancient emotional truths. The mirror-book at the end points to a readiness for profound self-reflection.',
    ARRAY['subconscious', 'memory', 'wisdom', 'self-reflection'],
    '[{"symbol": "Underwater library", "meaning": "Deep repository of subconscious knowledge"}, {"symbol": "Glowing books", "meaning": "Illuminated memories and insights"}, {"symbol": "Whale", "meaning": "Ancient wisdom and deep emotional truth"}, {"symbol": "Mirror book", "meaning": "Invitation to self-examination"}]'::jsonb,
    'A deeply peaceful and contemplative mood pervades this dream. There is a sense of being held and supported while exploring vulnerable territory. The encounter with forgotten memories suggests readiness for emotional integration.'
  ),
  (
    'c3d4e5f6-a7b8-9012-cdef-123456789012', uid,
    'The unstoppable train represents a feeling of being carried forward by forces beyond your control -- career, relationships, or time itself. The rapidly changing landscapes reflect a sense that life circumstances are shifting faster than you can process. The passengers all reading the same book suggest conformity or a shared experience you feel excluded from. Your altered hometown with the second moon indicates that returning to the familiar may not be possible in the way you imagine.',
    ARRAY['control', 'change', 'conformity', 'nostalgia'],
    '[{"symbol": "Unstoppable train", "meaning": "Life momentum beyond personal control"}, {"symbol": "Changing landscapes", "meaning": "Rapid transitions and instability"}, {"symbol": "Same book", "meaning": "Shared knowledge you feel excluded from"}, {"symbol": "Second moon", "meaning": "Altered perspective on the familiar"}]'::jsonb,
    'Anxiety is the primary emotional thread, but it''s tinged with curiosity rather than pure fear. The dream suggests a tension between wanting to control your direction and surrendering to the journey. There is beauty in the uncertainty.'
  ),
  (
    'd4e5f6a7-b8c9-0123-defa-234567890123', uid,
    'This dream is a rich meditation on time, memory, and intergenerational connection. The garden of clocks suggests you are processing your relationship with the passage of time. Your grandmother appearing young indicates a desire to know her beyond your limited experience of her. The clock that contains a sound rather than measuring time reveals what matters most to you: not when things happened, but how they felt.',
    ARRAY['time', 'family', 'memory', 'connection'],
    '[{"symbol": "Clock garden", "meaning": "Personal relationship with time and mortality"}, {"symbol": "Young grandmother", "meaning": "Desire for deeper ancestral connection"}, {"symbol": "Mirror paths", "meaning": "Self-reflection in the journey"}, {"symbol": "Sound in the clock", "meaning": "Emotional truth over chronological fact"}]'::jsonb,
    'Deep nostalgia and tenderness define this dream. There is a bittersweet quality -- joy in the reconnection and sorrow in its impermanence. The dream suggests active processing of grief and a healthy integration of loss into a narrative of love.'
  ),
  (
    'e5f6a7b8-c9d0-1234-efab-345678901234', uid,
    'The mirror maze represents the multiplicity of self -- the many versions of who you are, who you were, and who you could become. The mismatched reflections suggest internal conflict or fragmentation you are working to reconcile. The reflection that grabs your hand and shares its grief indicates suppressed emotions seeking acknowledgment. The empty mirror with the door behind it symbolizes the possibility of transcending self-analysis to find genuine peace.',
    ARRAY['identity', 'self-awareness', 'emotions', 'integration'],
    '[{"symbol": "Mirror maze", "meaning": "Complex self-image and internal multiplicity"}, {"symbol": "Mismatched reflections", "meaning": "Inner conflict between different aspects of self"}, {"symbol": "Warm mirrors", "meaning": "These aspects of self are alive and seeking connection"}, {"symbol": "Empty mirror door", "meaning": "Transcendence beyond self-examination"}]'::jsonb,
    'Confusion and disorientation dominate initially, but give way to a profound emotional encounter. The dream is processing questions of identity -- who you are versus who you present. The silent door at the end offers hope: integration is possible.'
  );

  -- Biometric data for each dream
  INSERT INTO public.biometrics (dream_id, user_id, source, heart_rate_avg, heart_rate_min, heart_rate_max, hrv_avg, spo2_avg, rem_duration_min, deep_sleep_min, light_sleep_min, total_sleep_min, sleep_score, recorded_at) VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', uid, 'Oura Ring', 58, 48, 72, 45, 97.2, 112, 95, 180, 448, 87, now() - interval '1 day'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', uid, 'Oura Ring', 55, 46, 68, 52, 97.8, 98, 105, 195, 462, 91, now() - interval '3 days'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', uid, 'Oura Ring', 62, 50, 78, 38, 96.9, 125, 82, 170, 435, 79, now() - interval '5 days'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', uid, 'Oura Ring', 56, 47, 70, 48, 97.5, 105, 98, 188, 450, 88, now() - interval '7 days'),
  ('e5f6a7b8-c9d0-1234-efab-345678901234', uid, 'Oura Ring', 60, 49, 75, 41, 97.0, 118, 88, 175, 440, 82, now() - interval '10 days');

END $$;
