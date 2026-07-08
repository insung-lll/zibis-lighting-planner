---
name: register-issue
description: Create a GitHub issue on zibis-org/zibis-lighting-planner to record a change, bug, design decision, or follow-up item that was just discussed or implemented in this conversation. Use this whenever the user asks to "이슈 등록해줘", "깃허브 이슈로 남겨줘", "이슈 만들어줘", "GitHub issue 만들어줘", or asks to track/기록해두다 a code, schema, or design change for later — even if they don't say the word "issue" explicitly. This is for GitHub Issues specifically; if the user says "clickup"이라고 명시하면 이 스킬을 쓰지 말 것.
---

# GitHub 이슈 등록

이 프로젝트(zibis-lighting-planner)의 변경사항, 버그, 설계 결정, 후속 작업(follow-up)을 GitHub Issue로 남긴다.

## 왜 이런 구조인가

이슈는 팀 전체가 보는 공개 기록이라, 대충 "방금 한 거 이슈로 남겨줘"라는 요청만으로 바로 만들지 않는다. 대화 맥락에서 실제로 무엇이 바뀌었는지 정리하고, 사용자에게 제목/본문을 보여준 뒤 확인받고 나서 실제로 `gh issue create`를 실행한다. 이슈를 지우는 것보다 먼저 확인받는 게 훨씬 싸다.

## 절차

1. **대상 레포는 항상 `zibis-org/zibis-lighting-planner`로 고정.** 다른 레포를 쓸지 물어볼 필요 없음.
2. **대화 맥락에서 재료를 모은다**: 방금 무엇을 바꿨는지(코드, DB 스키마, 설정 등), 왜 바꿨는지, 아직 안 끝난 부분(follow-up)이 있는지. 필요하면 `git diff`, `git log -3`, 또는 방금 적용한 Supabase 마이그레이션 내용을 다시 확인해서 정확하게 적는다. 짐작으로 채우지 말 것.
3. **아래 템플릿으로 제목과 본문을 초안 작성**한다:

```markdown
## 배경
(왜 이 작업이 필요했는지, 어떤 문제/요구사항에서 시작됐는지 1~3문장)

## 변경 내용
- (실제로 무엇을 바꿨는지 — 파일, 함수, 마이그레이션 이름 등 구체적으로)
- ...

## 아직 안 한 것 (Follow-up)
- [ ] (있으면 적고, 없으면 이 섹션 자체를 생략)

## 관련
- (관련 브랜치명, PR, 이전 이슈 등 — 없으면 생략)
```

제목은 한 줄로 무엇이 바뀌었는지 요약 (예: "products 테이블에 product_line 컬럼 추가 — 일반 등기구 라인 확장 대비"). "fix:", "feat:" 같은 커밋 컨벤션 접두어는 붙이지 않는다 (이슈 제목은 커밋 메시지가 아님).

4. **사용자에게 제목+본문을 보여주고 확인받는다.** 별도 승인 없이 바로 만들지 말 것 — 팀 전체가 보는 이슈라 오타나 맥락 누락이 있으면 먼저 잡아야 한다. 사용자가 이미 구체적인 제목/본문을 불러줬거나 명확히 "확인 없이 바로 만들어"라고 말한 경우엔 이 단계를 생략해도 된다.
5. **확인되면 `gh issue create`로 생성**한다:

```bash
gh issue create --repo zibis-org/zibis-lighting-planner \
  --title "<제목>" \
  --body "$(cat <<'EOF'
<본문>
EOF
)"
```

heredoc(`$(cat <<'EOF' ... EOF)`)을 반드시 쓴다 — 본문에 백틱, 마크다운 헤더, 따옴표가 섞여있어도 셸 이스케이프 문제 없이 그대로 전달된다.

6. **결과 URL을 마크다운 링크로 사용자에게 전달**한다 (예: `[#3 제목](https://github.com/zibis-org/zibis-lighting-planner/issues/3)`). bare `#3`처럼 링크 없이 번호만 말하지 않는다.
7. `gh issue create`가 502 등 일시적 네트워크 에러를 반환하면 한 번 더 재시도한다. 두 번째도 실패하면 사용자에게 알리고 원인을 짐작하지 말 것.

## 예시

**입력**: "방금 storage RLS 고친 거 이슈로 남겨줘"

**출력 (사용자에게 먼저 보여줄 초안)**:
> 제목: `estimates 스토리지 버킷 업로드 정책 누락 수정`
>
> 본문:
> ## 배경
> 견적 저장 시 엑셀 파일이 `estimates` 버킷에 업로드되지 않아 `excel_url`이 항상 비어있었음. 로그 확인 결과 업로드 요청이 400으로 실패.
>
> ## 변경 내용
> - `storage.objects`에 본인 폴더(`{user_id}/...`) 기준 insert/update/delete 정책 추가
> - 공개 read 정책 추가
>
> ## 관련
> - 재테스트로 `excel_url` 정상 저장 확인 완료

이렇게 사용자 확인을 받은 뒤에만 `gh issue create`를 실행한다.
